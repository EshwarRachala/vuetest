<template>
    <div>
        <header class="ph3 ph5-ns pt3 bb bt b--black-10 mb4">
            <div class="mw9 center">
                <a class="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc">test</a>
                <button @click="changename">changename</button>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
                <button @click="incrementIfOdd">Increment if odd</button>
                <button @click="decrementAsync">Decrement async</button>
                
                <label>Drop down</label>
                <select v-model="selected" @change="change()">
                    <option value="Eshwar">Eshwar</option>
                    <option  value="Mounika">Mounika</option>
                    <option value="Tanvi">Tanvi</option>                    
                </select>
            </div>            
        </header>
        <p>Selected :{{selected}}</p>
        <slot></slot>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        components: {

        },
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: {
            ...mapActions([
                'changename',
                'increment',
                'decrement',
                'incrementIfOdd',
                'decrementAsync'
            ]),
            change() {
                this.$store.dispatch('changename', this.selected)
            }
        }
    }
</script>