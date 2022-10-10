require 'rails_helper'

RSpec.describe Student, type: :model do
  let (:user) { User.create email: "sam@test.com",  password: "123456", password_confirmation: "123456"
  }
  it "is not valid without a name" do
  scully= Student.create notes: "X-files rocks!", rank: "Alien", image: "https://asdf.jpg", user_id: user.id
  expect(scully.errors[:name]).to_not be_empty
  end
  it "does not allow duplicate names" do
  Student.create(name:"Elle Woods", rank:"Very High", image:"https://i.insider.com/5f08ce4baee6a82702176d61?width=700", user_id:user.id)
  scully= Student.create(name:"Elle Woods", rank:"Very High", image:"https://i.insider.com/5f08ce4baee6a82702176d61?width=700", user_id:user.id)
  expect(scully.errors[:name]).to_not be_empty
  end
end
