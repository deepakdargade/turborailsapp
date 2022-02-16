Rails.application.routes.draw do
  resources :messages do
    member do
      post :edit
    end
  end
  root "messages#index"
end
