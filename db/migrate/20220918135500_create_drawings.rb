class CreateDrawings < ActiveRecord::Migration[6.0]
  def change
    create_table :drawings do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
