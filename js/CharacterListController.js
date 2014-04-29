angular.module('CharacterList').controller('CharacterListController', function($scope, characters) {
    $scope.characters = characters;
    $scope.characterFilter = null;
});