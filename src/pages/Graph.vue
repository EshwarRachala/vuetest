<template>
    <main-layout>
        <Filters>
            <section class="ph3 ph5-ns">
                <h5>Alphabet Update</h5>
                <alpha :data="bardata"/>              
            </section>
        </Filters>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import Filters from '../components/filters.vue'
    import alpha from '../components/alpha.vue'
    import {
        mapGetters,
        mapState
    } from 'vuex'

    export default {
        components: {
            MainLayout,
            Filters,
            alpha
        },
        computed: {
            ...mapState([

            ]),
            ...mapGetters(['bardata'])
        }
    }
</script>