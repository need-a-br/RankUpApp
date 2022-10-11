class Student < ApplicationRecord
    enum :rank, {
        white: "white",
        yellow: "yellow",
        green: "green",
        blue: "blue",
        purple: "purple",
        brown: "brown",
        black: "black"
    }, prefix: "belt"
    belongs_to :user
    validates :name, presence: true
    validates :name, :uniqueness => { :scope => :user_id }
    validates :notes, presence: true
    validates :rank, presence: true
    validates :image, presence: true
    validates :user_id, presence: true
end
