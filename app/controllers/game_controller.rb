class GameController < ApplicationController
	before_action :authenticate_user!

	layout 'game'
	def index
	end
end
