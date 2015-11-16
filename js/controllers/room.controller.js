let RoomController = function($scope, $state) {
  
  //Go to the add roommate page
  $scope.addRoomPage = function() {
    $state.go('root.roomAdd');
  };

};

RoomController.$inject = ['$scope', '$state'];

export default RoomController;