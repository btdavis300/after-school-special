class EnrolledProgramSerializer < ActiveModel::Serializer
  attributes :id, :enrolled, :program_name, :user_name

  has_one :user
  has_one :program

  def program_name
    "#{object.program.name}"
  end

  def user_name
    "#{object.user.username}"
  end

end
