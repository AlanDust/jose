class CreateDaythree < ActiveRecord::Migration[5.2]
  def change
    create_table :daythrees do |t|
      t.string :picture, null: false
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
