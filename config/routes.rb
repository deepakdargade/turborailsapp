Rails.application.routes.draw do
  resources :movies do
    collection do
      post :search
    end
  end
  resources :messages do
    member do
      post :edit
    end
  end
  root "messages#index"
end
