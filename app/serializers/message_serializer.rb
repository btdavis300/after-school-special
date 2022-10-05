class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :read, :user_name, :posted
  has_one :conversation
  has_one :user

  def user_name
    "#{object.user.first_name}"
  end

  def posted
    "#{object.created_at.strftime("%I:%M %p")}"
  end

end
