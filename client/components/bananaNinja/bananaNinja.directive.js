'use strict';

angular.module('codeMatchApp')
  .directive('bananaNinja', function () {
  	"use strict";
	    return {
	      templateUrl: 'components/bananaNinja/bananaNinja.html',
	      restrict: 'EAC',
	      replace: true,
	      link: function (scope, element, attrs) {
	      	var gameInstance = UnityLoader.instantiate("gameContainer", "components/bananaNinja/Build/build06.json", {onProgress: UnityProgress});

	  //     	function OnBananaClicked(keyword){
			// 	document.getElementById("tagsfilter").value += keyword + ", ";
			// }

			// function OnAddTagPressed(){
			// 	keyword = document.getElementById("taginput").value;
			// 	gameInstance.SendMessage ('KeywordsManager', 'AddKeyword', keyword);
			// }
	      }
    };
  });
