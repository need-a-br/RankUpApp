class AddNextRequirementToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :next_requirement, :string
  end
end
