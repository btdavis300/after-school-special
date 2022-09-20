class Rating < ApplicationRecord
    belongs_to :program 
    belongs_to :user 
end
