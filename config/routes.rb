Rails.application.routes.draw do
  resources :users
  post '/signup', to: 'users#create'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
