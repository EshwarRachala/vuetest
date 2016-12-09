<template>
    <div>
      <label>{{lblName}}</label>
                <select @change="change($event.target.value)">
                    <option v-bind:value="value"  v-for="value in values">{{value}}</option>                
                </select>
                </div>
</template>

<script>
    export default {
        props: ['values', 'lblName'],
        methods: {
            change(selected) {
                this.$emit('change', selected)
            }
        }
    }
</script>