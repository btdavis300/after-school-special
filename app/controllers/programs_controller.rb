class ProgramsController < ApplicationController

    def index
        programs = Program.all
        render json: programs, status: :ok
    end
end
