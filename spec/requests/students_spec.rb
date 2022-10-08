require 'rails_helper'

RSpec.describe "Students", type: :request do
  
  describe "GET /index" do
    it "gets a list of all students" do
      user = User.where(email: 'test@example.com', password: 'password', password_confirmation: 'password')
 
      Students.create(
        name: "Daniel LaRusso",
        notes: "Became a black belt in like 3 days",
        rank: "Black Belt",
        image: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2015/08/daniel-the-bully-karate-kid.jpg",
         user_id: user.id
      )
      get '/students'

      student = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(student.length).to eq 1
    # end
    end
  end
end