# require 'rails_helper'

RSpec.describe "Students" do
  let(:user) do 
    User.create email: 'test@example.com', password: 'password', password_confirmation: 'password'
  end

  let!(:student) do
    Student.create(
      name: "Daniel LaRusso",
      notes: "Became a black belt in like 3 days",
      rank: "black",
      image: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2015/08/daniel-the-bully-karate-kid.jpg",
      user_id: user.id
    )
  end

  describe "GET /index" do
    it "gets a list of all students" do
      sign_in(user)

      get '/students'

      student = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(student.length).to eq 1
    end
  end
  describe "PATCH /update" do
    it "updates an exisiting student and does not crash" do
      sign_in(user)
      student = Student.last
      student_params = {
        student: {
          name: "donovan"
        }
      }

      patch "/students/#{student.id}", params: student_params

      student = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      
    end
  end
  describe "PATCH /update" do
    it "updates an exisiting student" do
      sign_in(user)
      student = Student.last
      student_params = {
        student: {
          name: "donovan"
        }
      }

      patch "/students/#{student.id}", params: student_params

      student.reload
      expect(student.name).to eq('donovan')
      
    end
  end

  describe "POST /create" do
    it "creates a new student" do
      sign_in(user)
      student_params = {
        student: {
          name: "Johnny BGoode",
          notes: "Became a black belt in like 3 days",
          rank: "black",
          image: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2015/08/daniel-the-bully-karate-kid.jpg",
          user_id: user.id
        }
      }

      post "/students", params: student_params
      student = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(student["name"]).to eq "Johnny BGoode"

    end
  end

  describe "DELETE /destroy" do
    it "deletes a student" do
      sign_in(user)
      student = Student.last

      delete "/students/#{student.id}"
      student = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(Student.count).to eq 0
    end
  end
end
