<template>
    <div>
        <header class="ph3 ph5-ns pt3 bb bt b--black-10 mb4">
            <div class="mw9 center">
                <a class="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc">test</a>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
                <button @click="incrementIfOdd">Increment if odd</button>
                <button @click="decrementAsync">Decrement async</button>
                <dropdown :values='["Eshwar","Mounika","Tanvi"]' lblName="Names" v-on:change="change"></dropdown>       
            </div>            
        </header> 
        <slot></slot>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions,
        mapState
    } from 'vuex'
    import dropdown from './dropdown.vue'

    export default {
        components: {
            dropdown
        },
        computed: {
            ...mapState([

            ]),
            ...mapGetters([

            ])
        },
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'incrementIfOdd',
                'decrementAsync'
            ]),
            change(selected) {
                this.$store.dispatch('changename', selected)
            }
        }
    }
</script>