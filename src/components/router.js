app.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

  $stateProvider.state('home', 
  {
    url: '/',
    templateUrl: './templates/home.html'
  });

  $stateProvider.state('products', 
  {
    url: '/products',
    templateUrl: './templates/products.html'
  });

  $stateProvider.state('categories', 
  {
    url: '/categories',
    templateUrl: './templates/categories.html'
  });

  $stateProvider.state('cart', 
  {
    url: '/cart',
    templateUrl: './templates/cart.html'
  });

  $stateProvider.state('purchase', 
  {
    url: '/purchase',
    templateUrl: './templates/purchase.html'
  });

  $stateProvider.state('about-us', 
  {
    url: '/about-us',
    templateUrl: './templates/about-us.html'
  });

  $stateProvider.state('privacy-policy', 
  {
    url: '/privacy-policy',
    templateUrl: './templates/privacy-policy.html'
  });

  $stateProvider.state('cookies', 
  {
    url: '/cookies',
    templateUrl: './templates/cookies.html'
  });

});
