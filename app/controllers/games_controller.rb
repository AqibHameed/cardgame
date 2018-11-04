class GamesController < ApplicationController
  before_action :check_user, only: :index

  layout 'games'

  def index

  end

  def check_game_count
    if current_user.has_role? :admin && (current_user.has_role? :saleman)
       render status: :ok, json: {message: "games exist"}
    elsif  current_user.has_role? :user
      user_package = current_user.user_packages.find_by_package_plan_id(params[:plan_id])

      if user_package.present? && user_package.totalgames > 0
        render status: :ok, json: {message: "games exist"}
      else
        render status: :unprocessable_entity, json: {error: "games not exist"}
      end

    end
  end

  def reduce_game
    if current_user.has_role? :admin && (current_user.has_role? :saleman)
      render status: :ok, json: {message: "In case of admin or  saleman not reduce the game"}
    elsif current_user.has_role? :user
      user_package = current_user.user_packages.find_by_package_plan_id(params[:plan_id])
      total_games = user_package.totalgames

      if user_package.present? && total_games > 0

        if user_package.update(totalgames: total_games - 1)
          render status: :ok, json: {message: "successfully reduce the game"}
        else
          render status: :unprocessable_entity, json: {error: "not update the game count"}
        end

      else
        render status: :unprocessable_entity, json: {error: "remaining game is zero"}
      end

    end
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
      sign_in user, scope: :user if user.present?
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
