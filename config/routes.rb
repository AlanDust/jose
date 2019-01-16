Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :video, only: [:index, :create, :show]
      resources :dayone, only: [:index, :create, :show]
      resources :daytwo, only: [:index, :create, :show]
      resources :daythree, only: [:index, :create, :show]
      resources :dayfour, only: [:index, :create, :show]
      resources :dayfive, only: [:index, :create, :show]
      resources :daysix, only: [:index, :create, :show]
      resources :dayseven, only: [:index, :create, :show]

    end
  end

  get '/', to: 'homes#index'
  get '/videos', to: 'homes#index'
  get '/dayone', to: 'homes#index'
  get '/daytwo', to: 'homes#index'
  get '/daythree', to: 'homes#index'
  get '/dayfour', to: 'homes#index'
  get '/dayfive', to: 'homes#index'
  get '/daysix', to: 'homes#index'
  get '/dayseven', to: 'homes#index'


end
