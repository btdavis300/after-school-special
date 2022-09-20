class AddLastNameToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :last_name, :string
    add_column :users, :address, :string
    add_column :users, :zipcode, :integer
    add_column :users, :children_quantity, :integer
    add_column :users, :grade_level, :string
  end
end
