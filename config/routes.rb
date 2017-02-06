Capstone::Application.routes.draw do

  # The priority is based upon order of creation:
  # earlier in this file -> higher priority.

  root to: 'home#index', as: :home
  match '/about', to: 'about#index', as: :about, via: [:get]
  match '/candyland', to: 'candyland#index', as: :candyland, via: [:get]
  match '/contact', to: 'contact#index', as: :contact, via: [:get]
  match '/games', to: 'games#index', as: :games, via: [:get]
  match '/learning', to: 'learning#index', as: :learning, via: [:get]
  match '/ordering', to: 'ordering#index', as: :ordering, via: [:get]
  match '/privacy', to: 'privacy#index', as: :privacy, via: [:get]

end
