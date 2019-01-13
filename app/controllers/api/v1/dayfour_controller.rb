class Api::V1::DayfourController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Dayfour.all, current_user: current_user }
  end

  def create
    new_dayone = Dayfour.new(dayfour_params)

    if new_dayfour.save
      render json: new_dayfour
    else
      render json: { errors: new_dayfour.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Dayfour.find(params[:id])
  end

  private

  def dayfour_params
    params.require(:dayfour).permit(:picture)
  end
end
