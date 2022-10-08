class StudentsController < ApplicationController
    before_action :authenticate_user!

    def index
        students = Student.select { |student| student.user_id == current_user.id }
        render json: students
    end

    def show
        students = Student.find(params[:id])
        if students.user_id != current_user.id
            render json: students.errors, status: 422
        else 
            render json: students
        end
    end

end
