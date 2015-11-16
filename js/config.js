let config = function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      controller: 'LayoutController',
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.dashboard', {
      url: '/dashboard',
      controller: 'DashController',
      templateUrl: 'templates/dash.tpl.html'
    })
    .state('root.room', {
      url: '/room',
      controller: 'RoomController',
      templateUrl: 'templates/room.tpl.html'
    })
    .state('root.roomAdd', {
      url: '/room/add', 
      controller: 'AddRoomController',
      templateUrl: 'templates/room.add.tpl.html'
    })

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;