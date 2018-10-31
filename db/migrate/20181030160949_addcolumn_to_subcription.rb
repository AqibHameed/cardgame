class AddcolumnToSubcription < ActiveRecord::Migration[5.1]
  def change
    add_column :subcriptions, :totalgames, :integer
  end
end
