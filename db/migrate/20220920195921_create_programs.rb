class CreatePrograms < ActiveRecord::Migration[7.0]
  def change
    create_table :programs do |t|
      t.string :program_type
      t.string :name
      t.string :community
      t.string :agency
      t.integer :contact_number
      t.string :address
      t.integer :zipcode
      t.string :age_group

      t.timestamps
    end
  end
end
