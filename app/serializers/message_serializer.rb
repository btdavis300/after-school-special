class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :read, :user_name
  has_one :conversation
  has_one :user

  def user_name
    "#{object.user.first_name}"
  end
end
