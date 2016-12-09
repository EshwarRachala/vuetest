<style scoped>
    .text {
        font: bold 48px monospace
    }
    
    .enter {
        fill: green
    }
    
    .update {
        fill: #333
    }
</style>
<template>
    <div class="text"></div>
</template>

<script>
    export default {
        props: ['data'],
        mounted: function() {
            const d3 = this.$d3
            const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
            const margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            }

            const width = 960 - margin.left - margin.right
            const height = 500 - margin.top - margin.bottom

            const svg = d3.select(this.$el).append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)

            const g = svg.append('g').attr('transform', 'translate(32,' + (height / 2) + ')')

            update(alphabet)

            // Grab a random sample of letters from the alphabet, in alphabetical order.
            d3.interval(function() {
                update(d3.shuffle(alphabet)
                    .slice(0, Math.floor(Math.random() * 26))
                    .sort())
            }, 1500)

            function update(data) {
                // DATA JOIN
                // Join new data with old elements, if any.
                var text = g.selectAll('text')
                    .data(data)

                // UPDATE
                // Update old elements as needed.
                text.attr('class', 'update')

                // ENTER
                // Create new elements as needed.
                //
                // ENTER + UPDATE
                // After merging the entered elements with the update selection,
                // apply operations to both.
                text.enter().append('text')
                    .attr('class', 'enter')
                    .attr('x', function(d, i) {
                        return i * 32
                    })
                    .attr('dy', '.35em')
                    .merge(text)
                    .text(function(d) {
                        return d
                    })

                // EXIT
                // Remove old elements as needed.
                text.exit().remove()
            }
        }
    }
</script>


<!--
     
          

            const svg = d3.select(this.$el)
            const width = +svg.attr('width')
            const height = +svg.attr('height')
            const g = svg.append('g').attr('transform', 'translate(32,' + (height / 2) + ')')
    
    function update() {
                // DATA JOIN
                // Join new data with old elements, if any.
                var text = g.selectAll('text')
                    .data(data)

                // UPDATE
                // Update old elements as needed.
                text.attr('class', 'update')

                // ENTER
                // Create new elements as needed.
                //
                // ENTER + UPDATE
                // After merging the entered elements with the update selection,
                // apply operations to both.
                text.enter().append('text')
                    .attr('class', 'enter')
                    .attr('x', function(d, i) {
                        return i * 32
                    })
                    .attr('dy', '.35em')
                    .merge(text)
                    .text(function(d) {
                        return d
                    })

                // EXIT
                // Remove old elements as needed.
                text.exit().remove()
            }

            update(alphabet)

            // Grab a random sample of letters from the alphabet, in alphabetical order.
            d3.interval(function() {
                update(d3.shuffle(alphabet)
                    .slice(0, Math.floor(Math.random() * 26))
                    .sort())
            }, 1500)-->