class UserPackage < ApplicationRecord
  belongs_to :package_plan
  belongs_to :user
end
