angular.module('CharacterList').factory('characterService', function($http, $q) {
  return {

    // List
    getCharacters: function() {
      var deferred = $q.defer();

      $http.get('http://character-list.herokuapp.com/api/characters')
        .success(function(response) {
          deferred.resolve(response.data.results);
        })
        .error(function(response) {
          deferred.reject(response);
        });

      return deferred.promise; 
    },

    // Detail
    getCharacter: function(id) {
      var deferred = $q.defer();

      $http.get('http://character-list.herokuapp.com/api/characters/' + id)
        .success(function(response) {
          deferred.resolve(response.data.results[0]); // should only be 1
        })
        .error(function(response) {
          console.log(response);
          deferred.reject(response);
        });

      return deferred.promise; 
    }    
  };
});