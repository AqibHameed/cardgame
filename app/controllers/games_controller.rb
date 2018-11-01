class GamesController < ApplicationController
  before_action :check_user, only: :index

  layout 'games'

  def index;
  end

  private

  def check_user
    if user_signed_in?
      user = current_user
      if user.has_role? :admin
        render index
      elsif user.has_role? :saleman
        render index
      else
        can_play(user)
      end
    else
      @subcription = Subcription.find_by(identify_key: params[:identify_key])
      user = User.find_by(id: @subcription.user_id)
      sign_in user, scope: :use
      if user_signed_in?
        render index
      else
        redirect_to new_user_session_path
      end
    end
  end

  def can_play(user)
    if user.has_role? :user
      packages = user.user_packages
      if packages.empty?
        redirect_to entries_path
      else
        packages.each do |package|
          if package.totalgames > 0
            render index
          else
            redirect_to entries_path
          end
        end
      end
    end
  end

end
