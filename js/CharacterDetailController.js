angular.module('CharacterList').controller('CharacterDetailController', function($scope, character) {
    window.scrollTo(0,0);
    $scope.character = character;
});