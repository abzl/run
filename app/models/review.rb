class Review < ApplicationRecord
  belongs_to :review
  belongs_to :user
  belongs_to :sneaker
end
