class AddStateColumnForPackages < ActiveRecord::Migration[5.1]
  def change
    add_column :package_plans, :active, :boolean,  default: false
  end
end
