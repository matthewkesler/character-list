angular.module('CharacterList.controllers', []).
controller('charactersController', function($scope) {
    $scope.characters = [
{
        "id": 1009175,
        "name": "Beast",
        "description": "",
        "modified": "2014-01-13T14:48:32-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175"
      },
      {
        "id": 1009189,
        "name": "Black Widow",
        "description": "",
        "modified": "2013-01-22T13:53:47-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189"
      },
      {
        "id": 1009220,
        "name": "Captain America",
        "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        "modified": "2014-03-24T21:26:05-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/5261a81d0154e",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220"
      },
      {
        "id": 1009257,
        "name": "Cyclops",
        "description": "",
        "modified": "2014-02-16T11:15:46-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257"
      },
      {
        "id": 1009262,
        "name": "Daredevil",
        "description": "Abandoned by his mother, Matt Murdock was raised by his father, boxer \"Battling Jack\" Murdock, in Hell's Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.",
        "modified": "2013-07-01T16:44:00-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262"
      },
      {
        "id": 1009268,
        "name": "Deadpool",
        "description": "",
        "modified": "2013-10-18T17:33:26-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268"
      },
      {
        "id": 1009313,
        "name": "Gambit",
        "description": "",
        "modified": "2013-10-24T14:46:19-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/40/52696aa8aee99",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313"
      },
      {
        "id": 1009338,
        "name": "Hawkeye",
        "description": "",
        "modified": "2013-01-22T14:01:53-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338"
      },
      {
        "id": 1009351,
        "name": "Hulk",
        "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        "modified": "2014-04-01T20:10:17-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/03/526039b477c92",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351"
      },
      {
        "id": 1009368,
        "name": "Iron Man",
        "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
        "modified": "2013-11-07T10:55:38-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368"
      },
      {
        "id": 1009472,
        "name": "Nightcrawler",
        "description": "",
        "modified": "2013-10-17T15:06:41-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/40/526034979bc98",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009472"
      },
      {
        "id": 1009515,
        "name": "Punisher",
        "description": "",
        "modified": "2014-01-27T14:41:41-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009515"
      },
      {
        "id": 1009546,
        "name": "Rogue",
        "description": "",
        "modified": "2013-02-06T17:26:18-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/5112d84e2166c",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009546"
      },
      {
        "id": 1009629,
        "name": "Storm",
        "description": "Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.",
        "modified": "2013-10-24T14:17:31-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629"
      },
      {
        "id": 1009664,
        "name": "Thor",
        "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.\r\nWhile others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.\r\n\r\n",
        "modified": "2013-10-24T14:24:12-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664"
      },
      {
        "id": 1009718,
        "name": "Wolverine",
        "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
        "modified": "2013-11-20T17:40:18-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/00/528d3a1eb24ee",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718"
      }
    ];
});