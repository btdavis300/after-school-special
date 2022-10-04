class RenameReceiversToReaders < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :receiver_id, :reader_id
  end
end
