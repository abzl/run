class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.integer :price
      t.text :features
      t.string :img_url

      t.timestamps
    end
  end
end
