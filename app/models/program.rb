class Program < ApplicationRecord
    has_many :enrolled_programs
    has_many :users, through: :enrolled_programs

end
