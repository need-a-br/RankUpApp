class AddIsReadyForEvalToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :is_ready_for_eval, :boolean, default: false, null: false
  end
end
