# require 'rails_helper'

# RSpec.describe "Students", type: :request do
#   let(:user) do
#     User.create email: 'test@example.com', password: 'password', password_confirmation: 'password'
#   end
#   describe "GET /index" do
#     it "updates an existing student" do
#       Student.create(
#         name: "Daniel LaRusso",
#         notes: "Became a black belt in like 3 days",
#         rank: "Black Belt",
#         image: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2015/08/daniel-the-bully-karate-kid.jpg",
#         user_id: user.id
#       )
#       get "/students"

#       # student = JSON.parse(response.body)
#       expect(response).to have_http_status(200)
#       expect(student.length).to eq 1
#       # student=Student.first
#       # student_params= {student: {
#       #   name: 'Jesus'
#       # }}
#       # patch "/students/#{student.id}", params:student_params
#       # student=Student.first
#       # expect(student.name).to eq("Jesus")
#     end
#   end
#       # get '/students'

      
#   #   end
#   # end
# end