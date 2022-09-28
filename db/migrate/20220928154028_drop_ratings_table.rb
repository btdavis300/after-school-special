class DropRatingsTable < ActiveRecord::Migration[7.0]
  def up
    drop_table :ratings
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
