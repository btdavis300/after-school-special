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
    photos = ProfilePhoto.where(user_id: params[:id])
    if photos.exists?
        render json: photos.last, status: :ok
    else
        render json: {image_url: "https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1"}
    end
end

private

def photo_params
    params.permit(:image, :user_id)
end
end
