require "administrate/base_dashboard"

class PackagePlanDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user_packages: Field::HasMany,
    users: Field::HasMany,
    game: Field::BelongsTo,
    id: Field::Number,
    gametype: Field::String,
    numberofgames: Field::Number,
    amount: Field::Number.with_options(decimals: 2),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    active: Field::Boolean,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :user_packages,
    :users,
    :game,
    :id,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :user_packages,
    :users,
    :game,
    :id,
    :gametype,
    :numberofgames,
    :amount,
    :created_at,
    :updated_at,
    :active,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :user_packages,
    :users,
    :game,
    :gametype,
    :numberofgames,
    :amount,
    :active,
  ].freeze

  # Overwrite this method to customize how package plans are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(package_plan)
  #   "PackagePlan ##{package_plan.id}"
  # end
end
