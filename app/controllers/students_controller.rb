class StudentsController < ApplicationController
    before_action :authenticate_user!

    def index
        students = Student.select { |student| student.user_id == current_user.id }
    
        render json: students
    end
end
