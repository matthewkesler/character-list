/**
 * Character Detail Controller
 */
angular.module('CharacterList').controller('CharacterDetailController', function($scope, character) {
    window.scrollTo(0,0); // scroll top for small screens
    $scope.character = character;
});