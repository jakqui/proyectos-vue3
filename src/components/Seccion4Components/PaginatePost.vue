<script setup>
defineProps(["inicio", "fin", "tamanioPost"])
const emit = defineEmits(['refNext', 'refPrev'])
const activarSiguiente = () =>{
  //console.log('me diste a siguiente')
  emit("refNext")
}
</script>

<template>
    <q-btn-group push>
      <q-btn 
      @click="emit('refPrev')" 
      :disable="inicio <= 0"
      color="amber" 
      glossy text-color="black" 
      push 
      label="Preview" />
      <q-btn 
      @click="activarSiguiente()" 
      :disable="fin >= tamanioPost"
      color="orange" 
      glossy 
      text-color="black" 
      push 
      label="Next" />
    </q-btn-group>
</template>