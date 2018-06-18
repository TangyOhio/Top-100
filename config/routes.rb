Rails.application.routes.draw do
  
  namespace :api do
    resources :songs, except: [:show, :new, :edit]
  end
end
