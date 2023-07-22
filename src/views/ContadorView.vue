<script setup>
import {ref, computed } from 'vue'

//MODELO LOCAL
const name = 'Vue Dinámico'
let counter = ref(0);

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

// METODO EN VEZ DE UNA PROPIEDAD COMPUTADA
/*const classCounter = () => {
    if(counter.value === 0){
        return 'zero';
    }

    if(counter.value > 0){
        return 'positive'
    }
    if(counter.value < 0){
        return 'negative'
    }
}*/
</script>

<template>
    <h1>
        Hola {{ name }}
    </h1>
    <!--<h2 :class="classCounter()">{{ counter }}</h2>-->
    <h2 :class="classCounter">{{ counter }}</h2>
    <button @click="decrement">Decrementar</button>
    <button @click="increment">Aumentar</button> 
    <button @click="reset">Reset</button>    
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
</style>