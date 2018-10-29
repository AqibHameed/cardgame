Rails.application.routes.draw do
  namespace :admin do
    resources :users
    root to: "users#index"
  end

  get 'chats/index'

  devise_for :users,  controllers: {
      registrations: 'users/registrations',
      passwords: 'users/passwords',
      sessions: 'users/sessions'

  }
  as :user do
    get 'users/password/update_password', to: 'users/passwords#update_password'
    get 'users/password/new_password', to: 'users/passwords#new_password'
  end
 # get 'users/update_password', to: 'users/passwords#update_password'
  get 'contacts/index'
  get 'errors/not_found'
  get 'errors/internal_server_error'
  get 'games/index'
  get '/entries', to: 'home#entries'
  get '/mastergame', to: 'home#mastergame'
  root 'home#index'
  resources :package_plans
  post 'subcription/create', to: 'subcriptions#create', as: 'create'
  resources :subcriptions
  post '/subcription/:id' => 'subcriptions#show'
  post '/hook' => 'subcriptions#hook'


end
