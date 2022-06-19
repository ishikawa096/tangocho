require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Tangocho
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local
    config.generators.test_framework = :rspec
    config.react.server_renderer_extensions = ["jsx", "js", "tsx", "ts"]
    config.i18n.default_locale = :ja
  end
end
