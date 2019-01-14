class Api::V1::DayfiveController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Dayfive.all, current_user: current_user }
  end

  def create
    new_dayone = Dayfive.new(dayfive_params)

    if new_dayfive.save
      render json: new_dayfive
    else
      render json: { errors: new_dayfive.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Dayfive.find(params[:id])
  end

  private

  def dayfive_params
    params.require(:dayfive).permit(:picture)
  end
end
