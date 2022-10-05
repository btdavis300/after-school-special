class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :writer_id, :reader_id

  has_many :messages
end
