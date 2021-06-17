<template>
  <div id="app">
  

    <Clock/>
   
    
    </div>
</template>

<script>
import Clock from './components/Clock.vue'



export default {
  name: 'App',
  components: {
    Clock,
   
    
  },
  props: {

  },

  data(){
    return{
    
    }
  },



}


</script>

<style>


body{
    background-color: rgb(240, 248, 255);
  
}




</style>
