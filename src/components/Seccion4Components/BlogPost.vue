<script setup>
//defineProps(['title', 'author', 'id', 'body',])
defineProps({
  title: String,
  id: Number, 
  body:{
    type:String,
    default: 'Sin descripción'
  },
  author: String
})

const emit = defineEmits(['refCambiarFavorito'])
//emit('refCambiarFavorito', title)
</script>


<template>
    <div class="row">
      <div class="col-4">
        <q-card bordered class="blue-grey-1 my-card">
          <q-card-section>
            <div class="text-h6">{{ id }} - {{ title }}</div>
            <div class="text-subtitle2">{{author}}</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            {{ body }}
          </q-card-section>
          <q-btn 
            color="primary" 
            @click="emit('refCambiarFavorito', title)">Favorito</q-btn>
          <br/><br/>
        </q-card>
      </div>
    </div>
</template>