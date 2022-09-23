Rails.application.routes.draw do
  resources :ratings
  resources :programs
  resources :users, only: [:index, :create, :show, :update]
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"

  get "/drop_in_center", to: "programs#drop_in_center"
  get "/transitional_independent_living", to: "programs#transitional_independent_living"
  get "/street_outreach", to: "programs#street_outreach"
  get "/crisis_shelter", to: "programs#crisis_shelter"
  get "/transportation", to: "programs#transportation"
  get "/out_of_school_time", to: "programs#out_of_school_time"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
