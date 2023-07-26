import { ref } from 'vue'
import axios from 'axios'


export const useGetData = () => {

    const pokemons = ref(null)
    const loading = ref(true)
    const error = ref(null)
    
    const getData = async (url) =>{
        try{
            const res = await axios.get(url)       
            pokemons.value = res.data     
        }catch(e){
            //console.log(e)
            error.value = 'Error del Servidor'
        }finally{
            loading.value = false
        }
    }

    return {
        getData,
        pokemons,
        loading,
        error,
    };
}