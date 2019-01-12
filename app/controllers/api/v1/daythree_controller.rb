class Api::V1::DaythreeController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Daythree.all, current_user: current_user }
  end

  def create
    new_dayone = Daythree.new(daythree_params)

    if new_daythree.save
      render json: new_daythree
    else
      render json: { errors: new_daythree.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Daythree.find(params[:id])
  end

  private

  def daythree_params
    params.require(:daythree).permit(:picture)
  end
end
