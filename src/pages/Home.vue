<template>
    <main-layout>
        <Filters>
            <section class="ph3 ph5-ns">
                <h5>Hello Vue from Home page</h5>
                <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
                <p>Current names <strong>: {{$store.state.name}}</strong>
                </p>
            </section>
        </Filters>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import Filters from '../components/filters.vue'

    export default {
        components: {
            MainLayout,
            Filters
        }
    }
</script>