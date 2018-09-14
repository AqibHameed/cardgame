class AddGamesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :games, :int
  end
end
