<template>
    <main-layout>
        <Filters>
            <section class="ph3 ph5-ns">
                <h5>BarChart</h5>
                <ul>
                    <li v-for="value in bardata">
                        {{value.name}} age is {{value.age}}
                    </li>
                </ul>
                <barchart :data="bardata"/>              
            </section>
        </Filters>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import Filters from '../components/filters.vue'
    import barchart from '../components/barChart.vue'

    import {
        mapGetters,
        mapState
    } from 'vuex'

    export default {
        components: {
            MainLayout,
            Filters,
            barchart
        },
        computed: {
            ...mapState([

            ]),
            ...mapGetters(['bardata'])
        }
    }
</script>