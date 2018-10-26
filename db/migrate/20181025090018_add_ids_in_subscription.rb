class AddIdsInSubscription < ActiveRecord::Migration[5.1]
  def change
    add_column :subcriptions, :package_plan_id, :integer
    add_column :subcriptions, :user_id, :integer
  end
end
