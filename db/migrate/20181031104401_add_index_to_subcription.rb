class AddIndexToSubcription < ActiveRecord::Migration[5.1]
  def change
    add_column :subcriptions, :invoice_key, :string
    add_index :subcriptions, :invoice_key, unique: true
  end
end
