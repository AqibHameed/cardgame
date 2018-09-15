# frozen_string_literal: true

class Users::PasswordsController < Devise::PasswordsController
  # GET /resource/password/new
  def new
    super
  end

  # POST /resource/password
  def create
   # super
    redirect_to action: "new_password"
  end

  # GET /resource/password/edit?reset_password_token=abcdef
  def edit
    super
  end

  # PUT /resource/password
  # def update
  #   super
  # end
  def new_password

      @user = User.find_by_email(params[:user][:email])
      unless @user
         redirect_to new_user_password_path, notice: 'Email is not found'
      end

  end

  def update_password

    @user = User.find(params[:user][:user_id])
    if @user.update(user_params)
      redirect_to new_user_session_path
    else
        redirect_to new_user_password_path, notice: resource.errors.full_messages.first
    end

  end

  private

  def user_params
    # NOTE: Using `strong_parameters` gem
    params.require(:user).permit(:password, :password_confirmation)
  end

  # protected

  # def after_resetting_password_path_for(resource)
  #   super(resource)
  # end

  # The path used after sending reset password instructions
  # def after_sending_reset_password_instructions_path_for(resource_name)
  #   super(resource_name)
  # end
end
