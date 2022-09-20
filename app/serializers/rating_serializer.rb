class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :program_id, :rating
end
