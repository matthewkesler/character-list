angular.module('CharacterList', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
        when("/characters", {
            templateUrl: "partials/characters.html", 
            controller: "CharacterListController",
            resolve: {
                characters: function(characterService) {
                    return characterService.getCharacters();
                }
            }
        }).
        when("/characters/:id", {
            templateUrl: "partials/character.html", 
            controller: "CharacterDetailController",
            resolve: {
                character: function($route, characterService) {
                    return characterService.getCharacter($route.current.params.id);
                }
            }            
        }).
        otherwise({redirectTo: '/characters'});
}]);