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

    def create
        user = current_user
        student = user.students.create(student_params)
        if student.valid?
            render json: student
        else
            render json: student.errors, status: 422
        end
    end

    def update
        student = Student.find(params[:id])
        student.update(student_params)
        if student.valid?
            render json: student
        else
            render json: student.errors, status: 422
        end
    end

    def destroy
        student = Student.find(params[:id])
        if student.destroy
            render json: student
        else
            render json: student.errors, status: 422
        end
    end
    
    private
    def student_params
        params.require(:student).permit(:name, :rank, :notes, :image, :user_id)
    end

end
