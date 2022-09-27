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

    def brooklyn
        programs = Program.where(community: "Brooklyn")
        render json: programs, status: :ok
    end

    def manhattan
        programs = Program.where(community: "Manhattan")
        render json: programs, status: :ok
    end

    def queens
        programs = Program.where(community: "Queens")
        render json: programs, status: :ok
    end

    def bronx
        programs = Program.where(community: "Bronx")
        render json: programs, status: :ok
    end

    def staten_island
        programs = Program.where(community: "Staten Island")
        render json: programs, status: :ok
    end
end
