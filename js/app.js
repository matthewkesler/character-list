/**
 * Top Level Application Config + Routes
 */
angular.module('CharacterList', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
        when("/characters", {
            // define controllers and templates here to keep markup cleaner
            templateUrl: "partials/characters.html", 
            controller: "CharacterListController",
            // don't change the route until we have the data we need
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