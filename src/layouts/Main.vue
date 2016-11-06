<template>
    <div class="container">
        <ul>
            <li>
                <v-link href="/">Home</v-link>
                <v-link href="/about">About</v-link>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>

  import VLink from '../components/VLink.vue';
  
  export default {
    components: {
      VLink
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