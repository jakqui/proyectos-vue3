<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritosStore } from '../../stores/favoritos';

const useFavoritos = useFavoritosStore()

const {favoritos} = storeToRefs(useFavoritos)
const {removeFavorito} = useFavoritos
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <div v-else>
        <q-list dense bordered padding class="rounded-borders">
            <q-item clickable v-ripple v-for="pokemon in favoritos" :key="pokemon.name">
                <img :src="pokemon.sprites?.front_default" alt=""/>
                <q-item-section>                     
                    <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
                </q-item-section>
                <router-link class="q-pa-sm" color="primary" :to="`/pokemons/${pokemon.name}`">Más Información</router-link>
                <q-btn color="deep-orange" @click="removeFavorito(pokemon.id)">Eliminar</q-btn>
            </q-item>
        </q-list>        
    </div>
</template>