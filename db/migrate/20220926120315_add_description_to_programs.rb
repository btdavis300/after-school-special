class AddDescriptionToPrograms < ActiveRecord::Migration[7.0]
  def change
    add_column :programs, :description, :string
  end
end
