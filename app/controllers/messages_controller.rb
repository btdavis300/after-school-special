class MessagesController < ApplicationController
    before_action do
        @conversation = Conversation.find(params[:conversation_id])
    end

    def index
        @messages = @conversation.messages
        @message = @conversation.messages.new
        render json: @message, status: :ok
    end

    def create
        @message = @conversation.messages.new(message_params)
        if @message.save
        render json: @message, status: :created
        end
    end

private

      def message_params
       params.require(:message).permit(:body, :user_id)
      end
end
