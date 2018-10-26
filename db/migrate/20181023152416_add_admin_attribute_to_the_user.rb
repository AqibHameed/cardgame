class AddAdminAttributeToTheUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :admin, :boolean, defualt: false
  end
end
