angular.module('pokedexApp')
.directive('rollOnScroll', function(){
    return {
        restrict: 'A',
        link: (scope, elem, attrs)=>{
            window.onscroll = ()=>{
                var rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
                elem[0].style.transform = rotation;
            }
        }
    }
})
  
