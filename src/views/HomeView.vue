<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {useCounterStore} from '@/stores/counter.js'
import {storeToRefs} from 'pinia'

const useCounter = useCounterStore()
const {increment} = useCounter;
const {count, double} = storeToRefs(useCounter)
</script>

<template>
  <main>
    <!--<TheWelcome />-->
    <h1>Home counter : {{count}}</h1>
    <h2>Doble del contador: {{ double }}</h2>
    <button @click="increment">Incrementar</button>
  </main>
</template>
