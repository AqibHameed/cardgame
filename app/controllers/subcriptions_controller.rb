class SubcriptionsController < ApplicationController
  def new
    @sub=Subcription.new
    @package=PackagePlan.find_by(:id => params[:package_plan_id])
    @sub.package_name = @package.game.gamename
    @sub.package_plan_id = @package.id
  end

  def create
    @sub=Subcription.new(sub_params)
    if @sub.save
      redirect_to @sub.paypal_url(games_index_path)
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
      @sub.update_attributes notification_params: params.to_h,
                             status: status,
                             transaction_id: params[:txn_id],
                             purchased_at: Time.now
      create_user(params[:payer_id])
    end
    render nothing: true
  end

  def send_email(user)

  end

  def create_user(email)
    user=User.new
    user.email = 'rizu3661@gmail.com'
    user.password = rand(1..10000000)
    if user.save
      debugger
      UserMailer.mail_account(user).deliver
      UserMailer.payment_mail(user).deliver
    else
      UserMailer.payment_mail(user).deliver
    end
  end
  private

  def sub_params
    params.require(:subcription).permit(:package_plan_id, :amount,
                                        :package_name, :id)
  end
end
