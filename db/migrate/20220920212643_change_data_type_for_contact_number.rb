class ChangeDataTypeForContactNumber < ActiveRecord::Migration[7.0]
  def self.up
    change_table :programs do |t|
      t.change :contact_number, :string
    end
  end
  def self.down
    change_table :programs do |t|
      t.change :contact_number, :integer
    end
  end
end
