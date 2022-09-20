class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :program_type, :name, :community, :agency, :contact_number, :address, :zipcode, :age_group
end
