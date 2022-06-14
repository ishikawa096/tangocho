Rails.application.routes.draw do
  root 'home#index'
  get 'cards', to: 'home#index'
  get 'cards/new', to: 'home#index'
  get 'cards/:id', to: 'home#index'
  get 'cards/:id/edit', to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :cards, only: %i[index show create destroy update]
    end
  end
end
