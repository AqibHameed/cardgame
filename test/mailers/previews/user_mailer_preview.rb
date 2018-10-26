# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def mail_account
    user=User.last
    UserMailer.mail_account(user)
  end
end
