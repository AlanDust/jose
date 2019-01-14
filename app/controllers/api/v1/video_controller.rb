class Api::V1::VideoController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: Video.all, current_user: current_user }
  end

  def create
    new_dayone = Video.new(video_params)

    if new_video.save
      render json: new_video
    else
      render json: { errors: new_video.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Video.find(params[:id])
  end

  private

  def video_params
    params.require(:video).permit(:picture)
  end
end
