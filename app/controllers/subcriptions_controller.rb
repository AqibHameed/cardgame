class SubcriptionsController < ApplicationController
  def new
    @sub=Subcription.new
    @sub.user_id = current_user.id
    @package=PackagePlan.find_by(:id => params[:package_plan_id])
    @sub.package_name = @package.game.gamename
    @sub.package_plan_id = @package.id
  end

  def create
    @sub=Subcription.new(sub_params)
    if @sub.save
      redirect_to @sub.paypal_url(subcriptions_path(@sub))
    else
      render :new
    end
  end

  def index

  end

  def show
    @sub=Subcription.find_by(:id =>  params[:id])
  end

  def hook
    params.permit! # Permit all Paypal input params
    status = params[:payment_status]
    if status == 'Completed'
      @sub = Subcription.find params[:invoice]
      @sub.update_attributes notification_params: params, status: status, transaction_id: params[:txn_id], purchased_at: Time.now
    end
    render nothing: true
  end

  private

  def sub_params
    params.require(:subcription).permit(:user_id, :package_plan_id, :amount, :package_name, :id)
  end
end
