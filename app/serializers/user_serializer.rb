class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :address, :first_name, :last_name, :zipcode, :children_quantity, :grade_level
end
