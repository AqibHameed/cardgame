class SubcriptionsController < ApplicationController


  def create
    @sub = Subcription.new
    @package = PackagePlan.find_by(id: params[:package_plan_id])
    @sub.package_name = @package.game.gamename
    @sub.package_plan_id = @package.id
    @sub.amount = @package.amount
    @sub.totalgames = @package.numberofgames
    @sub.identify_key = @sub.generate_identification_key
    if @sub.save
      redirect_to @sub.paypal_url("#{games_index_path}?identify_key=#{@sub.identify_key}")
    else
      render :new
    end
  end
  
  def hook
    params.permit! # Permit all Paypal input params
    status = params[:payment_status]
    if status == 'Completed'
      @sub = Subcription.find_by_invoice_key params[:invoice]
      @sub.update_attributes notification_params: params.to_h,
                             status: status,
                             transaction_id: params[:txn_id],
                             purchased_at: Time.now
      user = User.create_user(params[:payer_email], @sub.package_plan_id, @sub.totalgames)
      @sub.update_attributes(user_id: user.id)
    end
    render nothing: true
  end

  private

  def sub_params
    params.require(:subcription).permit(:package_plan_id, :amount,
                                        :package_name, :id)
  end
end
