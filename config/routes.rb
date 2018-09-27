Rails.application.routes.draw do

  get 'games_master/index'

  devise_for :users,  controllers: {
      passwords: 'users/passwords',
      sessions: 'users/sessions'

  }
  as :user do
    get 'users/password/update_password', to: 'users/passwords#update_password'
    get 'users/password/new_password', to: 'users/passwords#new_password'
  end
 # get 'users/update_password', to: 'users/passwords#update_password'
  get 'entries/index'
  get 'contacts/index'
  get 'errors/not_found'
  get 'errors/internal_server_error'
  get 'game/index'
  root 'home#index'

end
