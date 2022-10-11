class Student < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :name, uniqueness: true
    validates :notes, presence: true
    validates :rank, presence: true
    validates :image, presence: true
    validates :user_id, presence: true
    end
