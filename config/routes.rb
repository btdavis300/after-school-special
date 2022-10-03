Rails.application.routes.draw do
  resources :profile_photos
  resources :friendships
  resources :enrolled_programs
  resources :ratings
  resources :programs
  resources :users, only: [:index, :create, :show, :update]

  # Authenication Routes
  post '/signup', to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"

  # Unenrollment Route
  delete "/unenrollment", to: "programs#unenrollment"

  # Unfriend Route
  delete "/unfriend", to: "friendships#unfriend"

  # Category Routes
  get "/drop_in_center", to: "programs#drop_in_center"
  get "/transitional_independent_living", to: "programs#transitional_independent_living"
  get "/street_outreach", to: "programs#street_outreach"
  get "/crisis_shelter", to: "programs#crisis_shelter"
  get "/transportation", to: "programs#transportation"
  get "/out_of_school_time", to: "programs#out_of_school_time"
  
  # Search Routes
  get "/search_community", to: "programs#search_community"
  get "/search_zipcode", to: "programs#search_zipcode"

  # Public Users Routes
  get "/public_users", to: "users#public_users"

  # Profile Photo Route
  get "current_user_photos", to: "profile_photos#current_user_photos"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
