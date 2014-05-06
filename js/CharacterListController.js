/**
 * Character List Controller
 */
angular.module('CharacterList').controller('CharacterListController', function($scope, characters) {
    $scope.characters = characters;
});