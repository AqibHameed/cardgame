class AddColumnsToSubcription < ActiveRecord::Migration[5.1]
  def change
    add_column :subcriptions, :amount, :float
    add_column :subcriptions, :package_name, :string
  end
end
