'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.startDate = moment('20170418', 'YYYYMMDD').fromNow();
      this.video = document.querySelector("#teaser");
      this.soundIcon = 'volume_up';

      this.toggleMute = function () {
        this.video.muted = !this.video.muted;
        return this.video.muted ? this.soundIcon = 'volume_up' : this.soundIcon = 'volume_off';
      }
    }
  }

  angular.module('codeMatchApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
