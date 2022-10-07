class StudentsController < ApplicationController
    before_action :authenticate_user!

    def index
        students = Student.select { |student| student.user_id == current_user.id }
        render json: students
    end

    def show
        student = Student.find(params[:id])
        render json: student
    end

end
