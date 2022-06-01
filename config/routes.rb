Rails.application.routes.draw do
  root 'home#index'
  resources :memos
  namespace :api do
    resources :cards, only: %i[index show create destroy update]
  end
end
