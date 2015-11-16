import angular from 'angular';
import 'angular-ui-router';

import config from './config'


//Controllers
import LayoutController from './controllers/layout.controller'
import HomeController from './controllers/home.controller'
import DashController from './controllers/dash.controller'
import RoomController from './controllers/room.controller';
import AddRoomController from './controllers/room.add.controller';

//Services
import RoomService from './services/room.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'oO0ERTmhPMthgXICGzBJVWXol20xz2fp3rglPqIE',
        'X-Parse-REST-API-Key': 'Mugv4291WkDyENpp8RA6a1qlIUiIWHqBPpIZ1bBK'
      }
    }
  })
  .config(config)

  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('DashController', DashController)
  .controller('RoomController', RoomController)
  .controller('AddRoomController', AddRoomController)



  .service('RoomService', RoomService)


;


