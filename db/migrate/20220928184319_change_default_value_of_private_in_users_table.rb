class ChangeDefaultValueOfPrivateInUsersTable < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :private, :boolean, :default => false
  end
end
