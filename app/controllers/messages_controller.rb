class MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    def create
        message = Message.create!(message_params)
        if message.valid?
            render json: message, status: :created
        else
            render json: friend_request.errors.full_messages, status: :unprocessable_entity
        end
    end

    def current_user_messages
        messages = Message.where(reader_id: params[:reader], writer_id: params[:writer])
        if messages.exists?
            render json: messages, status: :ok
        else
            render json: "No Messages", status: :not_found
        end
    end

private
    
    def message_params
        params.permit(:writer_id, :reader_id, :body, :writer, :reader)
    end

end
