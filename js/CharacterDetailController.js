angular.module('CharacterList').controller('CharacterDetailController', function($scope, character) {
    $scope.character = character;
    console.log(character);
});