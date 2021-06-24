class FrkReview < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :sneaker, foreign_key: true
  end
end
