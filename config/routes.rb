Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: "home#index"
  
  get 'home/1' => 'home#1'
  get 'home/2' => 'home#2'
  get 'home/3' => 'home#3'
  get 'home/4' => 'home#4'
  get 'home/5' => 'home#5'
  get 'home/6' => 'home#6'
  get 'home/7' => 'home#7'
  get 'home/8' => 'home#8'
  get 'home/9' => 'home#9'
  get 'home/10' => 'home#10'
  get 'home/11' => 'home#11'
  get 'home/12' => 'home#12'
  get 'home/13' => 'home#13'
  get 'home/14' => 'home#14'
  get 'home/15' => 'home#15'
  get 'home/16' => 'home#16'
  get 'home/17' => 'home#17'
  get 'home/18' => 'home#18'
  get 'home/19' => 'home#19'
  get 'home/20' => 'home#20'
  get 'home/21' => 'home#21'
  get 'home/22' => 'home#22'
  get 'home/23' => 'home#23'
  get 'home/24' => 'home#24'
  
  get  'home/index'
  get ":controller(/:action(/:id))"
  post ":controller(/:action(/:id))"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
