class FriendshipsController < ApplicationController

    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end

    def show
        friendship = Friendship.find_by(id: params[:id])
        render json: friendship, status: :accepted
    end

    def unfriend
        unfriend = Friendship.where(friend_id: params[:friend_id], requester_id: params[:requester_id]).destroy_all
        render json: "you have unfriended.", status: :accepted
    end

private

    def friendship_params
        params.permit(:friend_id, :requester_id)
    end
end
