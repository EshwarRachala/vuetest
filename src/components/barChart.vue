<template>
    <!--<svg width="600px" height="600px"></svg>-->
    <h3>hi from bar chart </h3>
</template>

<script>
    export default {
        props: ['data'],
        mount: function() {
            debugger
            this.$d3.selectAll('h3').style('color', 'red')
        }
    }
</script>