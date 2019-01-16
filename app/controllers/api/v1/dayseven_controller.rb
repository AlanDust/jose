class Api::V1::DaysevenController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Dayseven.all, current_user: current_user }
  end

  def create
    new_dayseven = Dayseven.new(dayseven_params)

    if new_dayseven.save
      render json: new_dayseven
    else
      render json: { errors: new_dayseven.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Dayseven.find(params[:id])
  end

  private

  def dayseven_params
    params.require(:dayseven).permit(:picture)
  end
end
