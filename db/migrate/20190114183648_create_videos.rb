class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :video, null: false
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
