require "administrate/base_dashboard"

class SubcriptionDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    notification_params: Field::Text,
    status: Field::String,
    transaction_id: Field::String,
    purchased_at: Field::DateTime,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    deleted_at: Field::DateTime,
    package_plan_id: Field::Number,
    user_id: Field::Number,
    amount: Field::Number.with_options(decimals: 2),
    package_name: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :notification_params,
    :status,
    :transaction_id,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :notification_params,
    :status,
    :transaction_id,
    :purchased_at,
    :created_at,
    :updated_at,
    :deleted_at,
    :package_plan_id,
    :user_id,
    :amount,
    :package_name,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :notification_params,
    :status,
    :transaction_id,
    :purchased_at,
    :deleted_at,
    :package_plan_id,
    :user_id,
    :amount,
    :package_name,
  ].freeze

  # Overwrite this method to customize how subcriptions are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(subcription)
  #   "Subcription ##{subcription.id}"
  # end
end
