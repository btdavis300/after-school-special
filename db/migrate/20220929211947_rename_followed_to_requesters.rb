class RenameFollowedToRequesters < ActiveRecord::Migration[7.0]
  def change
    rename_column :friendships, :followed_id, :requester_id
  end
end
