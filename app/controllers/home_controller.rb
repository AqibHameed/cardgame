class HomeController < ApplicationController
  def index; end
  def entries
    @packages = PackagePlan.where(:active => true)
  end
end
