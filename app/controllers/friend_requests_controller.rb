class FriendRequestsController < ApplicationController

    def index
        friend_requests = FriendRequest.all
        render json: friend_requests, status: :ok
    end

    def create
        friend_request = FriendRequest.create!(friend_request_params)
        if friend_request.valid?
            render json: friend_request, status: :created
        else
            render json: friend_request.errors.full_messages, status: :unprocessable_entity
        end
    end

    def current_user_requests
        friend_requests = FriendRequest.where(receiver_id: params[:id])
        if friend_requests.exists?
            render json: friend_requests, status: :ok
        else
            render json: "No Friend Requests", status: :not_found
        end
    end

    def delete_request
        FriendRequest.where(sender_id: params[:sender], receiver_id: params[:receiver]).destroy_all
        render json: "You have deleted a friend request", status: :accepted
    end

private

    def friend_request_params
        params.permit(:sender, :receiver, :sender_id, :receiver_id)
    end

end
