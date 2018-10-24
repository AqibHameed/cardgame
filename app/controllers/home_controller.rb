class HomeController < ApplicationController
  def index; end
  def entries
    @packages = PackagePlan.all
  end
end
