require 'rails_helper'

RSpec.describe "Api::V1::Auth::Sessions", type: :request do
  it "ログインできる" do
    create(:user, email: 'test@example.com')
    post api_v1_user_session_path, params: {
      email: 'test@example.com',
      password: 'password',
    }
    expect(response).to have_http_status(200)
  end
end
