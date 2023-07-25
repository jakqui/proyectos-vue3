<script setup>

import {useRouter} from 'vue-router'

const router = useRouter()

const back = () => {
    router.push('/')
}


</script>

<template>
    <h1>404 NOT FOUND</h1>
    <q-btn @click="back()">Volver</q-btn>
</template>