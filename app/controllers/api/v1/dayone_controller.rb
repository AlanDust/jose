class Api::V1::DayoneController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Dayone.all, current_user: current_user }
  end

  def create
    new_dayone = Dayone.new(dayone_params)

    if new_dayone.save
      render json: new_dayone
    else
      render json: { errors: new_dayone.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Dayone.find(params[:id])
  end

  private

  def dayone_params
    params.require(:dayone).permit(:picture)
  end
end
