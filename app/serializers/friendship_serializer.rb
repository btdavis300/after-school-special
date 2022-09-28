class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :reciever_id
end
