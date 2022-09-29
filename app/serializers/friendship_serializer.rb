class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :friend_id, :requester_id, :friend, :requester 
end
