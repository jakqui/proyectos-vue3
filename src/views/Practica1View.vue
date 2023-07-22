<script setup>
import {ref, computed } from 'vue'

//MODELO LOCAL
const name = 'Vue Dinámico'
const counter = ref(0);
const arrayFavoritos = ref([])

//METODO LOCAL
function increment() {
    counter.value = counter.value + 1;
    console.log(counter.value)
}

function decrement() {
    counter.value--;
    console.log(counter.value)
}

const reset = () => counter.value = 0

function agregarFavorito(){
    arrayFavoritos.value.push(counter.value)
}


//COMPUTED
const classCounter = computed(() =>{
    if(counter.value === 0){
        return 'zero';
    }

    if(counter.value > 0){
        return 'positive'
    }
    if(counter.value < 0){
        return 'negative'
    }
})
//EXISTE EL NUMERO EN EL ARRAY
const existeNumero = computed(() =>{
    //const numSearch = arrayFavoritos.value.find(num => num === counter.value)
    return arrayFavoritos.value.includes(counter.value) ? true : false
})
</script>

<template>
    <div class="q-pa-md">
        <div class="row">
            <h1>
                Hola {{ name }} > Practica1Vue
            </h1>
        </div>
        <div>
            <!--<h2 :class="classCounter()">{{ counter }}</h2>-->
            <h2 :class="classCounter">{{ counter }}</h2>
            <q-btn @click="decrement" color="deep-orange">Decrementar</q-btn>
            <q-btn @click="increment" color="primary">Aumentar</q-btn> 
            <q-btn @click="reset" color="black">Reset</q-btn>
            <q-btn @click="agregarFavorito" color="secondary" :disabled="existeNumero">Agregar Favorito</q-btn>    
            <br/>
        </div>
        
        <br/>
        <div class="row">
            <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">Números Favoritos</div>
                </q-card-section>
                <q-card-section>
                    <div class="q-pa-md" style="max-width: 350px">
                    <q-list dense bordered padding class="rounded-borders">
                        <q-item clickable v-ripple v-for="(value, index) in arrayFavoritos" :key="index">
                            <q-item-section>
                                {{ value }}
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>

                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style>
    h1 {
        color: red
    }

    .positive {
        color: green
    }

    .negative {
        color: red
    }

    .zero{
        color: peru
    }

    .disabled {
        border: 1px solid black;
        background-color: grey;
        color: white;
        padding: 15px;
        cursor: not-allowed;
    }
</style>