<template>
  <div class="container-fluid">
    <Navigation/>
    <slot class="container content theme-showcase" role="main"></slot>
    <AppFooter/>
  </div>
</template>
<script>
    import Footer from '../components/footer.vue'
    import Navigation from '../components/navigation.vue'

    export default {
        components: {
            AppFooter: Footer,
            Navigation
        },
        data() {
            return {
                count: 0
            }
        }
    }
</script>