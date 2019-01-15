class Api::V1::DaysixController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Daysix.all, current_user: current_user }
  end

  def create
    new_dayone = Daysix.new(daysix_params)

    if new_daysix.save
      render json: new_daysix
    else
      render json: { errors: new_daysix.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Daysix.find(params[:id])
  end

  private

  def daysix_params
    params.require(:daysix).permit(:picture)
  end
end
