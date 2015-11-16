let AddRoomController = function($scope, $state) {
  

  //GO BACK
  $scope.goBack = function() {
    $state.go('root.room');
  }
  //-------------------------------
};

AddRoomController.$inject = ['$scope', '$state'];

export default AddRoomController;