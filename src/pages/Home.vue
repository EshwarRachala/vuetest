<template>
  <main-layout>
  <h5>Hello Vue from Home page</h5>
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="decrementAsync">Decrement async</button>
  </div>
  </main-layout>
</template>
<script>
    import MainLayout from '../layouts/Main.vue'
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        components: {
            MainLayout
        },
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'decrementAsync'
        ])
    }
</script>