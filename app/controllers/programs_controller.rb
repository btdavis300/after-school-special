class ProgramsController < ApplicationController

    def index
        programs = Program.all
        render json: programs, status: :ok
    end

    def drop_in_center
        programs = Program.where(program_type: "Drop-In Center")
        render json: programs, status: :ok
    end

    def transitional_independent_living
        programs = Program.where(program_type: "Transitional Independent Living")
        render json: programs, status: :ok
    end

    def street_outreach
        programs = Program.where(program_type: "Street Outreach")
        render json: programs, status: :ok
    end

    def crisis_shelter
        programs = Program.where(program_type: "Crisis Shelter")
        render json: programs, status: :ok
    end

    def transportation
        programs = Program.where(program_type: "Transportation")
        render json: programs, status: :ok
    end

    def out_of_school_time
        programs = Program.where(program_type: "Out of School Time")
        render json: programs, status: :ok
    end

    def search_zipcode
        result = Program.where(zipcode: params[:q])
        if result.exists?
            render json: result, status: :ok
        else
            render json: {error: "No results found"}, status: :not_found
        end
    end

    def search_community
        result = Program.where(community: params[:q].capitalize())
        if result.exists?
            render json: result, status: :ok
        else
            render json: {error: "No results found"}, status: :not_found
        end
    end

    def unenrollment
        EnrolledProgram.where(program_id: params[:program], user_id: params[:user]).destroy_all
        render json: "you have been unerolled", status: :accepted
    end

    private

    def search_params
        params.permit(:q, :program, :user)
    end

end
