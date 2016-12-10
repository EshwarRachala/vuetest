<template>
    <main-layout>
        <Filters>
            <section class="ph3 ph5-ns">
                <linegraph :data="linedata"/>
                <barchart :data="bardata"/>              
            </section>
        </Filters>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import Filters from '../components/filters.vue'
    import barchart from '../components/barchart.vue'
    import linegraph from '../components/linegraph.vue'

    import {
        mapGetters,
        mapState
    } from 'vuex'

    export default {
        components: {
            MainLayout,
            Filters,
            barchart,
            linegraph
        },
        computed: {
            ...mapState([

            ]),
            ...mapGetters(['bardata', 'linedata'])
        }
    }
</script>