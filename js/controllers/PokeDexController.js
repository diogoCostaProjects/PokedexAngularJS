//	 Melhor maneira de acessar controler segundo John Papa, pois caso tenha um controller dentro do outro,
// acessa-se apenas pela variável vm que guardou o valor de this, que nesse caso é a função PokedexController

angular.module('pokedexApp').controller('PokeDexController', PokeDexController);

PokeDexController.$inject = ['PokeApiFactory'];

function PokeDexController(PokeApiFactory) {
	var vm = this;
	vm.searchText = '';
	vm.pkmList = [];

	if (PokeApiFactory.pkmList.length) {
		vm.pkmList = PokeApiFactory.pkmList;
	}
	else {
		PokeApiFactory.listAll()
			.then(pkmList => {
				vm.pkmList = pkmList;
			})
	}
}
