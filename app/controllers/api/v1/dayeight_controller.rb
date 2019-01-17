class Api::V1::DayeightController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Dayeight.all, current_user: current_user }
  end

  def create
    new_dayeight = Dayeight.new(dayeight_params)

    if new_dayeight.save
      render json: new_dayeight
    else
      render json: { errors: new_dayeight.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Dayeight.find(params[:id])
  end

  private

  def dayeight_params
    params.require(:dayeight).permit(:picture)
  end
end
