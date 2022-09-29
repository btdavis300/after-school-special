class User < ApplicationRecord
    has_secure_password
    has_many :enrolled_programs
    has_many :programs, through: :enrolled_programs

    has_many :friends, foreign_key: :friend_id , class_name: "Friendship"
    has_many :requesters, through: :friends
    has_many :requesters, foreign_key: :requester_id, class_name: "Friendship"
    has_many :friends, through: :requesters
end
