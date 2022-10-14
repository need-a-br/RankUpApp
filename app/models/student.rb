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
    enum :next_requirement, {
        technique1: "technique1",
        technique2: "technique2",
        technique3: "technique3",
        first_stripe: "first_stripe",
        technique4: "technique4",
        technique5: "technique5",
        technique6: "technique6",
        second_stripe: "second_stripe",
        technique7: "technique7",
        technique8: "technique8",
        technique9: "technique9",
        third_stripe: "third_stripe",
        technique10: "technique10",
        technique11: "technique11",
        technique12: "technique12",
        hand_form: "hand_form",
        weapon_form: "weapon_form",
        two_person_form: "two_person_form",
        format: "format"
    }
    belongs_to :user
    has_one_attached :avatar
    validates :name, presence: true
    validates :name, :uniqueness => { :scope => :user_id }
    validates :notes, presence: true
    validates :rank, presence: true
    # validates :image, presence: true
    validates :user_id, presence: true
end
