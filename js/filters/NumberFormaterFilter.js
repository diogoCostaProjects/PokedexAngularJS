angular.module('pokedexApp')
.filter('NumberFormater', function(){
    return function(input){
      var output = ('000'+ parseInt(input)).slice(-3); // quantidade de 0 deve ser igual ao número passado ao slice 
      return output;
  }

}
)
