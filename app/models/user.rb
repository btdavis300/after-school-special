class User < ApplicationRecord
    has_secure_password
    has_many :enrolled_programs
    has_many :programs, through: :enrolled_programs
    has_many :profile_photos

    has_many :friends, foreign_key: :friend_id , class_name: "Friendship"
    has_many :requesters, through: :friends
    has_many :requesters, foreign_key: :requester_id, class_name: "Friendship"
    has_many :friends, through: :requesters

    has_many :senders, foreign_key: :sender_id , class_name: "FriendRequest"
    has_many :receivers, through: :senders
    has_many :receivers, foreign_key: :receiver_id, class_name: "FriendRequest"
    has_many :senders, through: :receivers

    has_many :senders, foreign_key: :sender_id , class_name: "Message"
    has_many :receivers, through: :senders
    has_many :receivers, foreign_key: :receiver_id, class_name: "Message"
    has_many :senders, through: :receivers

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

    # validate :password_uppercase
    # validate :password_special_char
    # validate :password_contains_number
  
    # def password_uppercase
    #   return if !!password.match(/\p{Upper}/)
    #   errors.add :password, ' must contain at least 1 uppercase '
    # end
    
    # def password_special_char
    #   special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    #   regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    #   return if password =~ regex
    #   errors.add :password, ' must contain special character'
    # end
  
    # def password_contains_number
    #   return if password.count("0-9") > 0
    #   errors.add :password, ' must contain at least one number'
    # end
end
