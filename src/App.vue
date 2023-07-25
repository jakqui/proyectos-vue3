<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const tab = ref('home')

const enrrutar = (ruta) => {
  router.push(ruta)
}
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Curso Vue js Desde Cero con Bluuweb</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-tab name="home" label="Home" @click="enrrutar('/')"></q-tab>
          <q-tab name="component" label="Componentes" @click="enrrutar('/components')"/>
          <q-tab name="pokemons" label="Pokemons" @click="enrrutar('/pokemons')"/>
        </q-tabs>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <RouterView/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

  
  <footer>@Jakqueline Herrera García 2023</footer>
</template>


