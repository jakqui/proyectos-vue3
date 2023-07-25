<script setup>
import axios from 'axios'
import { ref } from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const poke = ref({})

const back = () => {
    router.push('/pokemons')
}



const getData = async () => {
    try{
        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)
        //console.log(data)
        poke.value = await data
    }catch(e){
        //console.log(e)
        poke.value = null
    }
}

getData()

</script>

<template>
    <div v-if="poke">
        <h1>Pokemon Name: {{ $route.params.pokename }}</h1>
        <!--VALIDAR SI EL OBJETO ESTA VACIO Object.entries(poke).length === 0 '' : poke.sprites.front_default-->
        <!--SE USO OPTIONAL CHAINING-->
        <img :src="poke.sprites?.front_default" alt=""/>        
    </div>
    <h1 v-else>No existe el pokemón</h1>
    <q-btn @click="back()">Volver</q-btn>
</template>