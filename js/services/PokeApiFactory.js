    angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory);

PokeApiFactory.$inject = ['$http']; // injeção da dependência de $http para dar get nos dados do server

function PokeApiFactory($http){
    return{
        get url(){  // Get é um metodo, sendo assim url não será reescrito, funciona como singleton apenas para retornar o valor
            return '//dev.treinaweb.com.br/pokeapi/' // monta a URL base para as requisições
        },
        pkmList: [],
       
       // Função para listar todos pokémons 
        listAll: function(){
            return $http.get(`${this.url}pokedex/1`)
                .then(response => response.data.pokemon) // vai passando para o próximo da cadeia do Then
                .then(pkmList => {
                    return pkmList.map(pokemon => {
                        pokemon.number = this.getNumberFromURL(pokemon.resource_uri);       
                        return pokemon;
                    })
                    .filter(pokemon => pokemon.number < 1000) // filtra os pokémons com number maior que 1000, pois a lista carregará muitos pokémons
                    .sort((a, b) => (a.number > b.number ? 1 : -1)) // oredena os pokémons pelo number (? é o então do if e : é o else, usado em arrow functions)
                })
                .then(pkmList => {
                    this.pkmList = pkmList;
                    return pkmList;
                })
        },
       
       // função para retornar pokémons pelo number 
        getPkm: function(pkm){
            return $http.get(`${this.url}pokemon/${pkm.number}`)
                .then(response => response.data);
        },
        
        // função que monta a URL para pegar o number do pokémon usando o ReGex 
        getNumberFromURL: function(url){
            return parseInt(url.replace(/.*\/(\d+)\/$/, '$1')); // Regex para pegar apenas o number da url
        }
    }
}
