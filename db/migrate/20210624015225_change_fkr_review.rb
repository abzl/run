class ChangeFkrReview < ActiveRecord::Migration[6.1]
  def change
    change_column_null :reviews, :sneaker_id, false
  end
end
