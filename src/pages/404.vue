<template>
  <main-layout>
    <div class="jumbotron">
      <div class="container">
        <h1>Page not found</h1>
        <ComponentA/>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import ComponentA from '../../src/components/A.vue'
  export default {
    components: {
      MainLayout,ComponentA,
    },
  };
</script>