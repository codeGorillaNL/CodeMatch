'use strict';

(function() {

  class MainController {

    constructor($http) {

      this.startDate = moment('20170418', 'YYYYMMDD').fromNow();
      this.video = document.querySelector("#teaser");
      this.soundIcon = 'volume_up';

      var vm = this;
      var codeText = '';

      var testVideo = function () {
        return navigator.userAgent.match(/(iPhone|iPod)/g) ? ('playsInline' in document.createElement('video')) : true;
      };

      this.mobileVideo = testVideo();

      this.toggleMute = function () {
        this.video.muted = !this.video.muted;
        return this.video.muted ? this.soundIcon = 'volume_off' : this.soundIcon = 'volume_up';
      }
    }
  }

  angular.module('codeMatchApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
