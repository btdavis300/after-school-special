class ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render json: @conversations, status: :ok
    end

    # def show
    #     conversation = Conversation.find_by(writer_id: params[:writer_id], reader_id: params[:reader_id])
    #     render json: conversation.first, status: :accepted
    # end

    def current_user_messages
        conversation = Conversation.where(writer_id: params[:writer_id], reader_id: params[:reader_id])
        if conversation.exists?
            render json: conversation.first, status: :ok
        else
            render json: "No messages.", status: :not_found
        end
    end

    def create
        if Conversation.between(params[:writer_id],params[:reader_id]).present?
           @conversation = Conversation.between(params[:writer_id], params[:reader_id]).first
        else
            @conversation = Conversation.create!(conversation_params)
        end
        render json: @conversation, status: :created
    end

private

    def conversation_params
         params.permit(:writer_id, :reader_id)
    end
end
