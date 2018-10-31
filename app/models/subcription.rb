class Subcription < ApplicationRecord
  acts_as_paranoid
  serialize :notification_params, Hash
  def paypal_url(return_path)
    values = {
        business: 'galdway@gmail.com',
        cmd: '_xclick',
        upload: 1,
        return: "#{ENV['app_host']}#{return_path}",
        invoice: "#{id}test",
        amount: self.amount/self.totalgames,
        item_name: self.package_name,
        item_number: self.package_plan_id,
        quantity: self.totalgames,
        notify_url: "#{ENV['app_host']}/hook"
    }
    "#{ENV['paypal_host']}/cgi-bin/webscr?" + values.to_query
  end




end
