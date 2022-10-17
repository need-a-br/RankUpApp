class StudentsController < ApplicationController
    before_action :authenticate_user!

    def index
        students = current_user.students
        students.sort

        studentsArray = Array.new
        students.each { |student| 
            x = {
                id: student.id,
                name: student.name,
                rank: student.rank,
                notes: student.notes,
                next_requirement: student.next_requirement,
                avatar: student.avatar.url,
                is_ready_for_eval: student.is_ready_for_eval
            }
            studentsArray.push x
        }       

        render json: studentsArray
    end

    def show
        student = current_user.students.find(params[:id])

        render json: { 
            id: student.id,
            name: student.name,
            rank: student.rank,
            notes: student.notes,
            next_requirement: student.next_requirement,
            avatar: student.avatar.url,
            is_ready_for_eval: student.is_ready_for_eval
        }
    end

    def create
        student = current_user.students.create(student_params)
        if student.valid?
            render json: { 
                id: student.id,
                name: student.name,
                rank: student.rank,
                notes: student.notes,
                next_requirement: student.next_requirement,
                avatar: student.avatar.url,
                is_ready_for_eval: student.is_ready_for_eval
            }
        else
            puts student.errors.messages
            render json: student.errors, status: 422
        end
    end

    def update
        student = current_user.students.find(params[:id])

        student.update(student_params)
        if student.valid?
            render json: { 
                id: student.id,
                name: student.name,
                rank: student.rank,
                notes: student.notes,
                next_requirement: student.next_requirement,
                avatar: student.avatar.url,
                is_ready_for_eval: student.is_ready_for_eval
            }
        else
            render json: student.errors, status: 422
        end
    end

    def destroy
        student = current_user.students.find(params[:id])
        if student.destroy
            render json: { 
                id: student.id,
                name: student.name,
                rank: student.rank,
                notes: student.notes,
                next_requirement: student.next_requirement,
                avatar: student.avatar.url,
                is_ready_for_eval: student.is_ready_for_eval
            }
        else
            render json: student.errors, status: 422
        end
    end
    
    private
    def student_params
        params.require(:student).permit(
            :image,
            :is_ready_for_eval,
            :name,
            :notes,
            :rank,
            :user_id,
            :avatar
        )
    end

end
