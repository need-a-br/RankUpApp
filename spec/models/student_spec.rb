require 'rails_helper'

RSpec.describe Student, type: :model do
  let (:user) { User.create email: "sam@test.com",  password: "123456", password_confirmation: "123456"
  }
    it "is not valid without a name" do
    scully= Student.create notes: "X-files rocks!", rank: "black", image: "https://asdf.jpg", user_id: user.id
    expect(scully.errors[:name]).to_not be_empty
  end
    it "does not allow duplicate names" do
    Student.create name:"Elle Woods", notes: "okay", rank:"blue", image:"https://i.insider.com/5f08ce4baee6a82702176d61?width=700", user_id: user.id
    scully= Student.create name:"Elle Woods", notes: "okay", rank:"blue", image:"https://i.insider.com/5f08ce4baee6a82702176d61?width=700", user_id: user.id 
    expect(scully.errors[:name]).to_not be_empty
  end
  it "is not valid without notes" do
    scully= Student.create name:"Elle Woods", rank: "black", image: "https://asdf.jpg", user_id: user.id
    expect(scully.errors[:notes]).to_not be_empty
    end
  it "is not valid without user_id" do
    scully= Student.create name:"Elle Woods", rank: "black", image: "https://asdf.jpg"
    expect(scully.errors[:user_id]).to_not be_empty
    end
  it "is not valid without rank" do
    scully= Student.create name:"Elle Woods", image: "https://asdf.jpg", user_id: user.id
    expect(scully.errors[:rank]).to_not be_empty
    end
  it "is not valid without image" do
    scully= Student.create name:"Elle Woods", rank: "black", user_id: user.id
    expect(scully.errors[:image]).to_not be_empty
    end
end
