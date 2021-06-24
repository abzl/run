class RemoveTitleFromSneakers < ActiveRecord::Migration[6.1]
  def change
    remove_column :sneakers, :title
    remove_column :reviews, :title

  end
end
