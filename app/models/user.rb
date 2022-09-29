class User < ApplicationRecord
    has_secure_password
    has_many :enrolled_programs
    has_many :programs, through: :enrolled_programs
    has_many :friendships
end
