class FriendshipsController < ApplicationController

    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end

    def show
        friendship = Friendship.find_by(id: params[:id])
        render json: friendship, status: :accepted
    end

    def destroy
        # Need to find by friendship ID somehow.
    end

private

    def friendship_params
        params.permit(:friend_id, :requester_id)
    end
end
