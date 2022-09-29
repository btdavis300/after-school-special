class RenameFollowersToFriends < ActiveRecord::Migration[7.0]
  def change
    rename_column :friendships, :follower_id, :friend_id
  end
end
