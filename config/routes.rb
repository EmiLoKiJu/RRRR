Rails.application.routes.draw do
  root 'root#index'
  get 'greetings/random', to: 'greetings#random'
end