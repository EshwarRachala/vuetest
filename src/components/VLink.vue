<template>
    <li v-bind:class="{ active: isActive }">
    <a v-bind:href="href">
        <slot></slot>
    </a>
    </li>
</template>

<script>
  
  export default {
    props: {
      href: String,
      required: true },
    computed: {
      isActive() {
        return this.href === window.location.pathname;
      },
    },
  };
</script>

<style scoped>
    .active {
        color: white;
    }
</style>