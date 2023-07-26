<script setup>
//import axios from 'axios'
//import {ref} from 'vue'
import {RouterLink} from 'vue-router'
import {useGetData} from '@/composables/getData.js'

/*
const pokemons = ref([])
const getData = async () =>{
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(data.results)
        pokemons.value = data.results
    }catch(error){
        console.log(error)
    }
}
getData()*/


//CON COMPOSABLES
const {pokemons, getData, loading, error } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando Información...</p>
    <q-banner v-if="error"  dense inline-actions class="text-white bg-red">
        {{ error }}
    </q-banner>
    <div v-if="pokemons">
        <q-btn color="secondary" @click="getData(pokemons.previous)" :disabled="!pokemons.previous">Previous</q-btn>
        <q-btn color="primary" @click="getData(pokemons.next)" :disabled="!pokemons.next">Next</q-btn>
        <q-list dense bordered padding class="rounded-borders">
            <q-item clickable v-ripple v-for="pokemon in pokemons.results" :key="pokemon.name">
                <q-item-section>
                    <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
                </q-item-section>
            </q-item>
        </q-list>        
    </div>
    
</template>