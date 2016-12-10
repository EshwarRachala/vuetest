<style>
    .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 2px;
    }
</style>

<template>

<div id="chartcontainer" style="height:345px;">
    <h4 style="text-align:center;">line chart</h4>
		<div id="divgraph" class="line"></div>
	</div>
    
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                svg: null,
                width: null,
                height: null,
                x: null,
                y: null
            }
        },
        watch: {
            'data': function() {
                this.update(this.data)
            }
        },
        methods: {
            update: function(data) {
                const d3 = this.$d3
                const parseTime = d3.timeParse('%d-%b-%y')

                const x = this.x
                const y = this.y
                const svg = this.svg

                data.forEach(function(d) {
                    d.date = parseTime(d.date)
                    d.close = +d.close
                })

                x.domain(d3.extent(data, function(d) {
                    return d.date
                }))

                y.domain([0, d3.max(data, function(d) {
                    return d.close
                })])


                this.svg.append('g').attr('transform', 'translate(0,' + this.height + ')')
                    .call(d3.axisBottom(this.x))

                this.svg.append('g').call(d3.axisLeft(this.y))

                const line = d3.line().x(function(d) {
                    return x(d.date)
                }).y(function(d) {
                    return y(d.close)
                })

                svg.append('path').data([data]).attr('class', 'line').attr('d', line)

            }
        },
        mounted: function() {
            const d3 = this.$d3
            const data = this.data
            const margin = {
                top: 15,
                right: 15,
                bottom: 60,
                left: 50
            }
            const parseTime = d3.timeParse('%d-%b-%y')
            this.width = document.getElementById('chartcontainer').offsetWidth
            this.height = (document.getElementById('chartcontainer').offsetHeight - document.getElementById('divgraph').offsetHeight)

            this.svg =
                d3.select(this.$el)
                .append('svg')
                // .style('background-color', 'red')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('viewBox', '0 0 ' + (Math.max(this.width, this.height) + margin.left + margin.right) + ' ' +
                    (Math.min(this.width, this.height) + margin.top + margin.bottom))
                .attr('preserveAspectRatio', 'xMinYMin meet')
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            this.x = d3.scaleTime().range([0, this.width])

            this.y = d3.scaleLinear().range([this.height, 0])

            this.update(data)
        }
    }
</script>