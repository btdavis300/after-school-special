class MessageSerializer < ActiveModel::Serializer
  attributes :id, :writer_id, :reader_id, :body
end
