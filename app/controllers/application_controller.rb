class ApplicationController < ActionController::Base
 # before_action :set_user
  # protect_from_forgery
  def after_sign_in_path_for(resource)
    root_path
    # request.env['omniauth.origin'] || stored_location_for(resource) || root_path
  end

  def after_sign_out_path_for(resource)
    root_path
    #chats_index_path
    # request.env['omniauth.origin'] || stored_location_for(resource) || root_path
  end
  #private
  # def set_user
  #   cookies[:username] = current_user.email
  # end
  #protect_from_forgery with: :exception
end
