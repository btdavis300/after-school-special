class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :address, :first_name, :last_name, :zipcode, :children_quantity, :grade_level, :private

  has_many :enrolled_programs
  has_many :programs
  has_many :friends, dependent: :destroy
  has_many :senders, serializer: SenderUserSerializerSerializer
end
