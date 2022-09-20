Rails.application.routes.draw do
  resources :ratings
  resources :programs
  resources :users
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
