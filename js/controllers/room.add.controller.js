let AddRoomController = function($scope, $state, RoomService) {
  
  //Add a roommate
  $scope.addRoom = (obj) => {
    RoomService.addRoom(obj).then( (res) => {
      $scope.roommate = {};
      alert('added a roommate!');
    })
  }

  //GO BACK
  $scope.goBack = function() {
    $state.go('root.room');
  }
  //-------------------------------
};

AddRoomController.$inject = ['$scope', '$state', 'RoomService'];

export default AddRoomController;