class PackagePlan < ApplicationRecord
  has_many :user_packages
  has_many :users, through: :user_packages
  belongs_to :game
end
