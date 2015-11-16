let RoomService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/roommates';

  this.getRoom = function() {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  }
  
  

};

RoomService.$inject = ['$http', 'PARSE'];

export default RoomService;