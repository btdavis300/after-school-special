class Message < ApplicationRecord
    belongs_to :writer, class_name: "User"
    belongs_to :reader, class_name: "User"
end
