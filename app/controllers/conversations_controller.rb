class ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render json: @conversations, status: :ok
    end

    def current_user_messages
        # conversation = Conversation.where((writer_id: params[:writer_id], reader_id: params[:reader_id]) || (writer_id: params[:reader_id], reader_id: params[:writer_id]))
        conversation = Conversation.where('(writer_id = ? AND reader_id = ?) OR (reader_id = ? AND writer_id = ?)', params[:writer_id], params[:reader_id], params[:writer_id], params[:reader_id])
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
