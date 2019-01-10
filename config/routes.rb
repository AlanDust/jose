Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :dayone, only: [:index, :create, :show]
      resources :daytwo, only: [:index, :create, :show]
    end
  end

  get '/', to: 'homes#index'
  get '/dayone' to: 'homes#index'
  get '/daytwo' to: 'homes#index'
end
