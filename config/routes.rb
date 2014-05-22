BillSplit::Application.routes.draw do
  root to: 'static_pages#home'

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resources :bills, only: [:index, :create]

    resources :bills, except: [:index, :create] do
      resources :bill_shares, only: [:index, :create]
    end

    resources :bill_shares, only: [:destroy]
  end
end
