class UserMailer < ApplicationMailer

  def mail_account(user)
    @user=user
    mail to: user.email, subject: 'Account Information of game'
  end

end
