class User < ApplicationRecord
  rolify
  has_many :user_packages
  has_many :package_plans, through: :user_packages
  after_create :assign_default_role
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :rememberable,
         :validatable, :recoverable


  def assign_default_role
    self.add_role(:user) if self.roles.blank?
  end
end
