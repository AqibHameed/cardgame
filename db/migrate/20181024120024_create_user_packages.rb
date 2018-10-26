class CreateUserPackages < ActiveRecord::Migration[5.1]
  def change
    create_table :user_packages do |t|
      t.integer :package_plan_id
      t.integer :user_id
      t.integer :totalgames

      t.timestamps
    end
  end
end
