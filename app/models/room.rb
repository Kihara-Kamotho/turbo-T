class Room < ApplicationRecord

  scope :ordered, -> { order(id: :desc) }
end
