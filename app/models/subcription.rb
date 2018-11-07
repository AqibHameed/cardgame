class Subcription < ApplicationRecord
  acts_as_paranoid
  serialize :notification_params, Hash
  before_create :set_key

  def set_key
    self.invoice_key = self.class.generate_unique_key unless invoice_key.present?
  end

  def self.generate_unique_key
    new_key = generate_key
    if exists?(invoice_key: new_key)
      generate_unique_key
    else
      new_key
    end
  end

  def generate_identification_key
    SecureRandom.urlsafe_base64
  end

  def self.generate_key
    letters = ('A'..'Z').to_a
    numbers = (1..9).to_a
    id = letters.sample(3) + numbers.sample(2) + letters.sample(1)
    id.join('')
  end

  def paypal_url(return_path)
    values = {
        business: "#{ENV['paypal_business_account']}",
        cmd: '_xclick',
        upload: 1,
        return: "#{ENV['app_host']}#{return_path}",
        invoice: "#{self.invoice_key}",
        amount: self.amount / self.totalgames,
        item_name: self.package_name,
        item_number: self.package_plan_id,
        quantity: self.totalgames,
        notify_url: "#{ENV['app_host']}/hook"
    }
    "#{ENV['paypal_host']}/cgi-bin/webscr?" + values.to_query
  end

end
