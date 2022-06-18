require 'rails_helper'

RSpec.describe "Api::V1::Auth::Registrations", type: :request do
  it "ユーザー登録できる" do
    post api_v1_user_registration_path, params: {
      name: 'username',
      email: 'test@example.com',
      password: 'password',
      password_confirmation: 'password',
    }
    expect(response).to have_http_status(200)
  end
end
