class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users, status: :ok
    end

    def public_users
        users = User.select{|user| user != current_user && user.private == false}
        render json: users, status: :ok
    end    

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user status: :accepted
    end

    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
      end

private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation, :first_name, :last_name, :address, :zipcode, :children_quantity, :grade_level, :private)
    end

end
