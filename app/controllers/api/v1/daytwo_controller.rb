class Api::V1::DaytwoController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Daytwo.all, current_user: current_user }
  end

  def create
    new_dayone = Daytwo.new(daytwo_params)

    if new_daytwo.save
      render json: new_daytwo
    else
      render json: { errors: new_daytwo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Daytwo.find(params[:id])
  end

  private

  def daytwo_params
    params.require(:daytwo).permit(:picture)
  end
end
