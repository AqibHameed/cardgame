# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :authenticate_user_with_user_name, only: :create
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    super do
      resource.authentication_token = Devise.friendly_token
      resource.save
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end
  #private

  def authenticate_user_with_user_name
    username = "StripPals!_Sales"
    password = "Grassdale5759!"
    if params[:user][:email] == username && params[:user][:password] == password
      sign_in(:user, User.first)
      redirect_to game_index_path
    end
    #sign_in(:user, User.first)
  end
  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
