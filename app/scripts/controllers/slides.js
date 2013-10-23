'use strict';
/*global $:false*/
angular.module('alumniPresentationApp')
  .controller('SlidesCtrl', function ($scope, $routeParams) {
  //Starting slide:
  $scope.slideId = $routeParams.id;
  $scope.templates =
    [ { name: 'Introduction and name', url: 'views/alumni/intro.html'}
    , { name: 'Just a few things (Octocat)', url: 'views/alumni/octocat.html'}
    , { name: 'I was a student once', url: 'views/alumni/student.html'}
    , { name: 'I didn\'t party all that hard', url: 'views/alumni/no-party.html'}
    , { name: 'You\'re all in this together', url: 'views/alumni/together.html'}
    , { name: 'Make friends - play video games', url: 'views/alumni/portal.html'}
    , { name: 'Hired to Geek Squad', url: 'views/alumni/support.html'}
    , { name: 'Special Assignment to Summer Academy', url: 'views/alumni/builder.html'}
    , { name: 'I got to launch big sites and private portals', url: 'views/alumni/plug-in.html'}
    , { name: 'I thought I was pretty cool', url: 'views/alumni/cool.html'}
    , { name: 'Then I got by BIG employment contract', url: 'views/alumni/boss.html'}
    , { name: 'Then I learned about decks', url: 'views/alumni/deck-fail.html'}
    , { name: '"Okay" I thought, counter the culture!', url: 'views/alumni/ninja.html'}
    , { name: 'I got to build even more AWESOME things!', url: 'views/alumni/builder.html'}
    , { name: 'I went to conferences (FOR FREE!)', url: 'views/alumni/conferences.html'}
    , { name: 'Then we wanted to do something innovative', url: 'views/alumni/innovator.html'}
    , { name: 'That\'s when the death threats started', url: 'views/alumni/death.html'}
    , { name: 'I started interacting with other managers', url: 'views/alumni/managers.html'}
    , { name: 'Managers like saving money - I was saving money', url: 'views/alumni/money.html'}
    , { name: 'But when I got a new manager they didnt\'t understand me(us)', url: 'views/alumni/murakami.html'}
    , { name: 'So we started a new company - which is terrifying!', url: 'views/alumni/minion.html'}
    , { name: 'But not so bad - you\'re all in this together', url: 'views/alumni/together.html'}
    , { name: 'Some things I\'ve learned: You\'re always learning, collaboration is key', url: 'views/alumni/collaboration.html'}
    , { name: 'Go to meetups! Network (I\'m a hypocrite)', url: 'views/alumni/network.html'}
    , { name: 'Read Books! Research new ideas!', url: 'views/alumni/teacher.html'}
    , { name: 'But seriously - be yourself - be humble', url: 'views/alumni/be-yourself.html'}
    , { name: 'Okay here\'s a little piece of what I\'m working on', url: 'views/alumni/taken-charge.html'}
    , { name: 'Conclusion - Contact - Links - Slides', url: 'views/alumni/outro.html'}
  ];
  
  $scope.template = $scope.templates[$scope.slideId];

  $scope.nextSlide = function() {
	$scope.slideId++;
	$scope.template = $scope.templates[$scope.slideId];
	//Needed when called from JQuery
	$scope.$digest();
  };

  $scope.previousSlide = function() {
	$scope.slideId--;
	$scope.template = $scope.templates[$scope.slideId];
	//Needed when called from JQuery
	$scope.$digest();
  };

  $scope.goToSlide = function(slideId) {
	$scope.slideId = slideId;
	$scope.template = $scope.templates[$scope.slideId];
  };

  $(document).keydown(function(event) {
	switch (event.keyCode) {
        case 37: $scope.previousSlide(); break;
        case 39: $scope.nextSlide();break;
    }
  });

  });
