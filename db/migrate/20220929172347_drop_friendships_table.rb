class DropFriendshipsTable < ActiveRecord::Migration[7.0]
  def up
    drop_table :friendships
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
