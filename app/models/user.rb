# frozen_string_literal: true

class User < ApplicationRecord
  rolify
  has_many :user_packages
  has_many :package_plans, through: :user_packages
  after_create :assign_default_role
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :rememberable,
         :registerable,:validatable, :recoverable

  def self.generate_password
    rand(1_000_000..10_000_000)
  end

  def self.create_userpackage(user_id, package_plan_id, total_games)
    package = UserPackage.find_by(user_id: user_id, package_plan_id: package_plan_id)
    if package.nil?
      new_user_package = UserPackage.new(totalgames: total_games,
                                         package_plan_id: package_plan_id,
                                         user_id: user_id)
      if new_user_package.save
        return true
      end
    else
      total_games += package.totalgames
      package.update_attributes(package_plan_id: package_plan_id,
                                user_id: user_id,
                                totalgames: total_games)
      return true
    end
    false
  end

  def self.create_user(email, package_plan_id, total_games)
    user = User.find_by(email: email)
    if user.nil?
      password = User.generate_password
      user = User.new(email: email, password: password)
      if user.save && create_userpackage(user.id, package_plan_id,
                                         total_games)
        UserMailer.mail_account(user, password).deliver
        UserMailer.payment_mail(user).deliver
      end
    else
      UserMailer.payment_mail(user).deliver if create_userpackage(user.id,
                                                                  package_plan_id,
                                                                  total_games)
    end
    user
  end

  private

  def assign_default_role
    self.add_role(:user) if self.roles.blank?
  end
end
