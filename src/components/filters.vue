<template>
    <div>
        <header class="ph3 ph5-ns pt3 bb bt b--black-10 mb4">
            <div class="mw9 center">
                <dropdown class="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc" :values='auths' lblName="Auths" v-on:change="CriteriaChanged"></dropdown>
                <dropdown class="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc" :values='frequency' lblName="Frequency" v-on:change="CriteriaChanged"></dropdown>
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
                'auths', 'names', 'frequency'
            ])
        },
        methods: {
            ...mapActions(['CriteriaChanged'])
        }
    }
</script>