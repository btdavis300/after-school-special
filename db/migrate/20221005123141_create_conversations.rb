class CreateConversations < ActiveRecord::Migration[7.0]
  def change
    create_table :conversations do |t|
      t.integer :writer_id
      t.integer :reader_id

      t.timestamps
    end
  end
end
