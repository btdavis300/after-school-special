class CreateProfilePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :profile_photos do |t|
      t.integer :user_id
      t.timestamps
    end
  end
end
