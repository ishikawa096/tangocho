Rails.application.routes.draw do
  # devise_for :users
  root 'home#index'
  get 'cards', to: 'home#index'
  get 'cards/new', to: 'home#index'
  get 'cards/:id', to: 'home#index'
  get 'cards/:id/edit', to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :cards, only: %i[index show create destroy update]
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: "api/v1/auth/registrations"
      }
      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end
