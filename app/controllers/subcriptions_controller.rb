class SubcriptionsController < ApplicationController
  def new
    @sub=Subcription.new
  end

  def create
    @sub = Subcription.new
    @package=PackagePlan.find_by(id: params[:package_plan_id])
    @sub.package_name = @package.game.gamename
    @sub.package_plan_id = @package.id
    @sub.amount = @package.amount
    @sub.totalgames = @package.numberofgames
    if @sub.save
      redirect_to @sub.paypal_url(games_index_path)
    else
      render :new
    end
  end

  def index; end

  def show
    @sub=Subcription.find_by(:id =>  params[:id])
  end

  def hook
    params.permit! # Permit all Paypal input params
    status = params[:payment_status]
    if status == 'Completed'
      @sub = Subcription.find params[:invoice]
      @sub.update_attributes notification_params: params.to_h,
                             status: status,
                             transaction_id: params[:txn_id],
                             purchased_at: Time.now
     user = User.create_user(params[:payer_email], @sub.package_plan_id, @sub.totalgames)
      # bypass_sign_in user, scope: :user
    end
    render nothing: true
  end

  private

  def sub_params
    params.require(:subcription).permit(:package_plan_id, :amount,
                                        :package_name, :id)
  end
end