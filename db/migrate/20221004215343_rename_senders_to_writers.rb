class RenameSendersToWriters < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :sender_id, :writer_id
  end
end
