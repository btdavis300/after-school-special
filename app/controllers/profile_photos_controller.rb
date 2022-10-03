class ProfilePhotosController < ApplicationController
def index
    render json: ProfilePhoto.all
end

def show
   photo = ProfilePhoto.find_by(id: params[:id])
   render json: photo, status: :ok 
end

def create
    @profile_photo = ProfilePhoto.new(photo_params)
    if @profile_photo.save
        render json: @profile_photo, status: :created
    else
        render json: @profile_photo.errors, status: :unprocessable_entity
    end
end

def current_user_photos
    photos = ProfilePhoto.where(user_id: params[:id]).last
    render json: photos, status: :ok
end

private

def photo_params
    params.permit(:image, :user_id)
end
end
