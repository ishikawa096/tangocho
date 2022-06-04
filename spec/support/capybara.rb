require 'capybara/rspec'

Capybara.register_driver :remote_chrome do |app|
  url = ENV['CHROME_DRIVER_URL']
  caps = ::Selenium::WebDriver::Remote::Capabilities.chrome(
    'goog:chromeOptions' => {
      'args' => [
        'headless',
        'no-sandbox',
      ],
    }
  )
  Capybara::Selenium::Driver.new(app, browser: :remote, url: url, capabilities: caps)
end

RSpec.configure do |config|
  config.before(:each, type: :system, js: true) do
    driven_by :remote_chrome
    Capybara.server_host = 'web'
    Capybara.app_host = "http://#{Capybara.server_host}"
  end
end
