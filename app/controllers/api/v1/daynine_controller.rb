class Api::V1::DaynineController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Daynine.all, current_user: current_user }
  end

  def create
    new_daynine = Daynine.new(daynine_params)

    if new_daynine.save
      render json: new_daynine
    else
      render json: { errors: new_daynine.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Daynine.find(params[:id])
  end

  private

  def daynine_params
    params.require(:daynine).permit(:picture)
  end
end
