class AddDeletedAtToSubscriptions < ActiveRecord::Migration[5.1]
  def change
    add_column :subcriptions, :deleted_at, :datetime
    add_index :subcriptions, :deleted_at
  end
end
