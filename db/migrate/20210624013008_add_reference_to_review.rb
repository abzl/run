class AddReferenceToReview < ActiveRecord::Migration[6.1]
  def change
add_index :reviews, :id
  end
end
