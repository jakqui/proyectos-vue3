<script setup>
import {ref, computed, onMounted} from "vue"

import BlogPost from '../components/Seccion4Components/BlogPost.vue';
import PaginatePost from '../components/Seccion4Components/PaginatePost.vue';
import LoadingSpinner from '../components/Seccion4Components/LoadingSpinner.vue';
import ButtonCounter from '../components/Seccion4Components/ButtonCounter.vue'

const posts = ref([])
const postXpage = 10//NO SE NECESITA QUE SEA REACTIVO PORQUE SIEMRE SERAN 10 POST POR PAGINA
const inicio = ref(0)
const fin = ref(postXpage)
const loading = ref(true)

const favorito = ref('')
const cambiarFavorito = (title) =>{
    favorito.value = title
}

const next = () =>{
    inicio.value = inicio.value + postXpage
    fin.value = fin.value + postXpage
}

const prev = () =>{
    inicio.value += - postXpage
    fin.value += - postXpage
}

//FORMA 1 EN EL CREATE
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
        //REGRESAR UN ATRIBUTO ADICIONAL
        data.map(function(dato){
            return dato.author = "Jakqueline Herrera Garcia"
        })
        //ASIGNAR DATOS A CONSTANTE POSTS
        posts.value = data
    })
    .catch((e) => console.log(e))
    .finally(() => {
        setTimeout(() =>{
            loading.value = false
        }, 2000)        
    })*/

//FORMA 2 onMounted
/*onMounted(async () =>{
    fetchData() 
})*/

//FORMA 3 LO MAS CORRECTO ES HACER LA LLAMADA ANTES DE CREAR LOS
//COMPONENTES EN EL CREATED CON FUNCIONES ASYNCRONAS
const fetchData = async() => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        posts.value = await res.json()
    }catch(e){
        console.log(e)
    }finally{
        setTimeout(() =>{
            loading.value = false
        }, 2000) 
    }    
}
fetchData()




const maxLength = computed(() => posts.value.length)
</script>

<template>
    <LoadingSpinner v-if="loading"/>
    <div v-else>
        <h2>Mi Post Favorito es: {{ favorito }}</h2>
        <br/><br/>
        <PaginatePost 
            @refNext="next" 
            @refPrev="prev"
            :inicio="inicio"
            :fin="fin" 
            :tamanioPost="maxLength"
            class="q-mb-md"/>
        <template v-for="post in posts.slice(inicio, fin)" :key="post.id">
            <blog-post 
            :title="post.title" 
            :author="post.author" 
            :id="post.id" 
            :body="post.body"
            @refCambiarFavorito="cambiarFavorito"
            class="q-mb-md"/>
            
        </template>
    </div>
</template>

<style>

</style>