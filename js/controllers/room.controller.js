let RoomController = function($scope, $state, RoomService) {
  console.log('RoomController');


  //Get a list of roommates
  RoomService.getRoom().then( (res) => {
   
    $scope.roommates = res.data.results;
  });
  //Go to the add roommate page
  $scope.addRoomPage = function() {
    $state.go('root.roomAdd');
  };
  //GO BACK
  $scope.goBack = function() {
    $state.go('root.dashboard');
  };



};

RoomController.$inject = ['$scope', '$state', 'RoomService'];

export default RoomController;