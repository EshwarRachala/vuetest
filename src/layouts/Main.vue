<template>
    <div class="container">
           <ul>
                <li>
                    <v-link href="/">Home</v-link>
                </li>
                <li>
                    <v-link href="/about">About</v-link>
                </li>
            </ul>
        <alert show type="success">hi threre</alert>
        <slot></slot>
    </div>
</template>

<script>

 import {alert,navbar} from 'vue-strap';
  import VLink from '../components/VLink.vue';
  
  
  export default {
    components: {
      VLink,
      alert
    },
     data () {
    return { count: 0 }
  },
    ready(){
       
    },
     destroyed () {
    
  }
    
  }
</script>

<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
</style>