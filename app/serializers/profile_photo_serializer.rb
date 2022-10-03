class ProfilePhotoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :image_url
end
