<template>
    <div class="cf">
        <div class="fl w-10 tc pv5 bg-black-10 pa3 pa5-ns">
            <dl class="f6 lh-title mv2">
                <dropdown class="dib ml0 gray" :values='auths' lblName="Auths" v-on:change="CriteriaChanged"></dropdown>
            </dl>
            <dl class="f6 lh-title mv2">
                <dropdown class="dib ml0 gray" :values='frequency' lblName="Frequency" v-on:change="CriteriaChanged"></dropdown>
            </dl>

        </div>
        <div class="fl w-90 tc pv5 bg-black-05">
            <slot></slot>
        </div>
    </div>
</template>
<style>
    .cf:before,
    .cf:after {
        content: " ";
        display: table;
    }
    .cf:after {
        clear: both;
    }
    .cf {
        *zoom: 1;
    }
    .fl {
        float: left;
        _display: inline;
    }
    .w-10 {
        width: 10%;
    }
    .bg-black-10 {
        background-color: rgba(0, 0, 0, .1);
    }
    .bg-black-05 {
        background-color: rgba(0, 0, 0, .05);
    }
    .pv5 {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .tc {
        text-align: center;
    }
</style>
<script>
    import {
        mapGetters,
        mapActions,
        mapState
    }
    from 'vuex'
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