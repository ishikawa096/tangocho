require 'rails_helper'
WebMock.disable_net_connect!(allow: ['web', 'chrome:4444'])

RSpec.describe 'react', type: :system, js: true do
  it 'react' do
    visit root_path
    expect(page).to have_content('Hello, World!')
  end
end
