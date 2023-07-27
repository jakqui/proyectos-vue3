<script setup>
//import axios from 'axios'
import {useRoute, useRouter} from 'vue-router'
import {useGetData} from '@/composables/getData'
import { useFavoritosStore } from '../../stores/favoritos';
import { storeToRefs } from 'pinia';

const route = useRoute()
const router = useRouter()
const {pokemons, getData, loading, error} = useGetData()
const useFavoritos = useFavoritosStore()
const {addFavorito, findPoke} = useFavoritos

const back = () => {
    router.push('/pokemons')
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)
</script>

<template>
    <p v-if="loading">Cargando Información...</p>
    <q-banner v-if="error"  dense inline-actions class="text-white bg-red">
        No existe el pokemon
    </q-banner>
    <div v-if="pokemons">
        <h1>Pokemon Name: {{ $route.params.pokename }}</h1>
        <!--VALIDAR SI EL OBJETO ESTA VACIO Object.entries(poke).length === 0 '' : poke.sprites.front_default-->
        <!--SE USO OPTIONAL CHAINING-->
        <img :src="pokemons.sprites?.front_default" alt=""/>   
        <q-btn color="primary" 
        @click="addFavorito(pokemons)"
        :disabled="findPoke(pokemons.name)"
        >Agregar Favoritos</q-btn>     
    </div>
    <br/>
    <q-btn @click="back()">Volver</q-btn>
</template>