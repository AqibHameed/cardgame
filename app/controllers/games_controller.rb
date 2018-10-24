class GamesController < ApplicationController
	before_action :authenticate_user!

	layout 'games'
	def index
	end
end
