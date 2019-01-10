class CreateDayseven < ActiveRecord::Migration[5.2]
  def change
    create_table :daysevens do |t|
      t.string :picture, null: false
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
