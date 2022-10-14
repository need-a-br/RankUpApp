class StudentsController < ApplicationController
    before_action :authenticate_user!

    def index
        students = current_user.students
        render json: students
    end

    def show
        student = current_user.students.find(params[:id])
        render json: student
    end

    def create
        student = current_user.students.create(student_params)
        if student.valid?
            render json: student
        else
            puts student.errors.messages
            render json: student.errors, status: 422
        end
    end

    def update
        student = current_user.students.find(params[:id])
        student.update(student_params)
        if student.valid?
            render json: student
        else
            render json: student.errors, status: 422
        end
    end

    def destroy
        student = current_user.students.find(params[:id])
        if student.destroy
            render json: student
        else
            render json: student.errors, status: 422
        end
    end
    
    private
    def student_params
        params.require(:student).permit(
            :avatar,
            :image,
            :is_ready_for_eval,
            :name,
            :notes,
            :rank,
            :user_id
        )
    end

end
