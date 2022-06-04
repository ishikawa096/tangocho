require 'rails_helper'

RSpec.describe "cards", type: :request do
  let(:card) { create(:card) }

  before do
    get api_cards_path
  end

  it "レスポンスに成功する" do
    expect(response).to have_http_status(200)
  end
end
