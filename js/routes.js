angular.module('pokedexApp')
.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/pokedex',{
            templateUrl: 'templates/PokeDexView.html',
            controller: 'PokeDexController as vm'
        })
        .when('/pokedex/:pokeNumber', {
            templateUrl: 'templates/PokeInfoView.html',
            controller: 'PokeInfoController as vm'
        })
        .otherwise({
            redirectTo: '/pokedex'
        })
}])     