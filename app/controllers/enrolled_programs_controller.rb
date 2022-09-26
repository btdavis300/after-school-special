class EnrolledProgramsController < ApplicationController

    def show
        enroll = EnrolledProgram.find(params[:id])
        render json: enroll, status: :ok
    end

    def create
        enroll = EnrolledProgram.create(enrolled_params)
        render json: enroll, status: :created
    end

    def destroy
        enroll = EnrolledProgram.find(params[:id])
        enroll.destroy
    end

private

    def enrolled_params
        params.permit(:user_id, :program_id, :enrolled)
    end
end
