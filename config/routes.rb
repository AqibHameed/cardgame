Rails.application.routes.draw do

  get 'errors/not_found'

  get 'errors/internal_server_error'

  devise_for :users,  controllers: {
      passwords: 'users/passwords',
      sessions: 'users/sessions'

  }
  as :user do
    get 'users/password/update_password', to: 'users/passwords#update_password'
    get 'users/password/new_password', to: 'users/passwords#new_password'
  end
 # get 'users/update_password', to: 'users/passwords#update_password'
  get 'game/index'
  root 'home#index'
  match "/404", :to => "errors#not_found", :via => :all
  match "/500", :to => "errors#internal_server_error", :via => :all

end
