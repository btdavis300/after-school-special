class Conversation < ApplicationRecord
    belongs_to :writer, :foreign_key => :writer_id, class_name: 'User'
    belongs_to :reader, :foreign_key => :reader_id, class_name: 'User'

has_many :messages, dependent: :destroy
validates_uniqueness_of :writer_id, :scope => :reader_id

scope :between, -> (writer_id,reader_id) do
where("(conversations.writer_id = ? AND conversations.reader_id =?) OR (conversations.writer_id = ? AND conversations.reader_id =?)", writer_id, reader_id, reader_id, writer_id)
end
end
