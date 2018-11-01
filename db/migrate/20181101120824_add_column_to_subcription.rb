class AddColumnToSubcription < ActiveRecord::Migration[5.1]
  def change
    add_column :subcriptions, :identify_key, :string
  end
end
