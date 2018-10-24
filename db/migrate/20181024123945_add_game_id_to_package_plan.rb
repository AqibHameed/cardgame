class AddGameIdToPackagePlan < ActiveRecord::Migration[5.1]
  def change
    add_column :package_plans, :game_id, :integer
  end
end
