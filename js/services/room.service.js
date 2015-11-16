let RoomService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/roommates';

  //View all roommates
  this.getRoom = function() {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };
  //Add a roommate
  let Roommate = function(obj) {
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.email = obj.email;
  };

  this.addRoom = function(obj) {
    // console.log(obj);
    let room = new Roommate(obj);
    return $http.post(url, room, PARSE.CONFIG);

  };
  
  

};

RoomService.$inject = ['$http', 'PARSE'];

export default RoomService;