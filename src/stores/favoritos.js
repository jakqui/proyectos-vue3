import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useFavoritosStore = defineStore('favoritos', () =>{
    const favoritos = ref([])
    if(localStorage.getItem('favoritos')){
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }
    

    function addFavorito(poke) {
        favoritos.value.push(poke)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const removeFavorito = (id) => {
        //REGRESA TODOS LOS FAVORITOS MENOS EL QUE COINCIDE
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const findPoke = name => favoritos.value.find(item => item.name === name)


    return {
        favoritos,
        addFavorito,
        removeFavorito,
        findPoke,
    }
})