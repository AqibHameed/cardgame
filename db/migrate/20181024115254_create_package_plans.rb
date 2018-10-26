class CreatePackagePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :package_plans do |t|
      t.string :gametype
      t.integer :numberofgames
      t.float :amount

      t.timestamps
    end
  end
end
