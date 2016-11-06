<template>
  <main-layout>
    <p>Welcome homew</p>
    <button class="btn btn-success">Submit</button>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import {vsAlert} from 'vuestrap-base-components/src/components';
  export default {
    components: {
      MainLayout
    }
  }
</script>