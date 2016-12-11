<style>
    .bar {
        fill: steelblue
    }
</style>
<template>
	<div id="chartcontainer" style="height:345px;">
        <h4 style="text-align:center;">Bar chart</h4>
		<div id="divgraph"></div>
	</div>
</template>
<script>
    export default {
        props: ['data'],
        data() {
            return {
                svg: null,
                x: null,
                y: null,
                yAxis: null,
                xAxis: null,
                height: null,
                width: null
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

                this.x.domain([0, d3.max(this.data, (d) => +d.age)])

                this.y.domain(this.data.map((d) => d.name))

                const bars = this.svg.selectAll('rect').data(data)

                bars.exit().remove()

                bars.enter()
                    .append('rect')
                    .merge(bars)
                    .attr('class', 'bar')
                    .attr('x', 0)
                    .attr('y', (d) => this.y(d.name))
                    .attr('height', this.y.bandwidth())
                    .attr('width', (d) => this.x(d.age))

                this.svg.select('.yAxis').call(this.yAxis)
            }
        },
        mounted: function() {
            const d3 = this.$d3
            const margin = {
                top: 15,
                right: 15,
                bottom: 60,
                left: 50
            }

            this.width = document.getElementById('chartcontainer').offsetWidth
            this.height = (document.getElementById('chartcontainer').offsetHeight - document.getElementById('divgraph').offsetHeight)

            this.svg = d3.select(this.$el).append('svg')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('viewBox', '0 0 ' + (Math.max(this.width, this.height) + margin.left + margin.right) + ' ' +
                    (Math.min(this.width, this.height) + margin.top + margin.bottom))
                .attr('preserveAspectRatio', 'xMinYMin meet')
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            this.x = d3.scaleLinear().domain([0, d3.max(this.data, (d) => +d.age)]).range([0, this.width])

            this.y = d3.scaleBand().domain(this.data.map((d) => d.name)).range([this.height, 0]).padding(0.1)


            this.yAxis = d3.axisLeft(this.y)
            this.xAxis = d3.axisBottom(this.x)

            this.svg.selectAll('rect').data(this.data).enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', 0)
                .attr('y', (d) => this.y(d.name))
                .attr('height', this.y.bandwidth())
                .attr('width', (d) => this.x(d.age))

            this.svg.append('g').attr('class', 'y axis').call(this.yAxis)

            this.svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + this.height + ')')
                .call(this.xAxis)
                .selectAll('text')
                .style('font-size', '16px')
                .style('text-anchor', 'end')
                .attr('dx', '-.8em')
                .attr('dy', '.15em')
        }
    }
</script>