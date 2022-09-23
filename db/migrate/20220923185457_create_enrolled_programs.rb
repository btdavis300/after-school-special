class CreateEnrolledPrograms < ActiveRecord::Migration[7.0]
  def change
    create_table :enrolled_programs do |t|
      t.integer :user_id
      t.integer :program_id
      t.boolean :enrolled

      t.timestamps
    end
  end
end
