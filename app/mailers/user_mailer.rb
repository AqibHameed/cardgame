class UserMailer < ApplicationMailer

  def mail_account(user)
    @user = user
    mail to: user.email, subject: 'Account Information'
  end

  def payment_mail(user)
    @user=user
    mail to: user.email, subject: 'Payment Information'
  end

end
