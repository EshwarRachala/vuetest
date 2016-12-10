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
                height: null,
                width: null,
                xAxis: null,
                yAxis: null
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

                const chart = this.svg
                const xChart = this.x
                const yChart = this.y
                const height = this.height
                const xAxis = this.xAxis
                const yAxis = this.yAxis
                const width = this.width

                xChart.domain(data.map(function(d) {
                        return d.name
                    }))
                    // set domain for y axis
                yChart.domain([0, d3.max(data, function(d) {
                    return +d.age
                })])

                const barWidth = width / data.length

                // get the bars
                const bars = chart.selectAll('rect').data(data)

                // remove existing bars
                bars.exit().remove()

                bars.enter()
                    .append('rect')
                    .merge(bars)
                    .attr('class', 'bar')
                    .attr('x', function(d, i) {
                        return i * barWidth + 1
                    })
                    .attr('y', function(d) {
                        return yChart(d.age)
                    })
                    .attr('width', barWidth - 1)
                    .attr('height', function(d) {
                        return height - yChart(d.age)
                    })


                // left axis
                chart.select('.yAxis')
                    .call(yAxis)
                    // bottom axis
                chart.select('.xAxis')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis)
                    .selectAll('text')
                    .style('text-anchor', 'end')
                    .attr('dx', '-.8em')
                    .attr('dy', '.15em')
                    .attr('transform', function(d) {
                        return 'rotate(-65)'
                    })
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

            this.x = d3.scaleBand().domain(this.data.map(function(d) {
                return d.name
            })).range([0, this.width])

            this.y = d3.scaleLinear().domain([0, d3.max(this.data, function(d) {
                return +d.age
            })]).range([this.height, 0])

            this.xAxis = d3.axisBottom(this.x)

            this.yAxis = d3.axisLeft(this.y)

            this.svg.append('g').attr('class', 'y axis').call(this.yAxis)

            this.svg.append('g')
                .attr('class', 'xAxis')
                .attr('transform', 'translate(0,' + this.height + ')')
                .call(this.xAxis)
                .selectAll('text')
                .style('text-anchor', 'end')
                .attr('dx', '-.8em')
                .attr('dy', '.15em')
                .attr('transform', function(d) {
                    return 'rotate(-65)'
                })

            // add labels
            this.svg
                .append('text')
                .attr('transform', 'translate(-35,' + (this.height + margin.bottom) / 2 + ') rotate(-90)')
                .text('% of total watch time')

            this.svg
                .append('text')
                .attr('transform', 'translate(' + (this.width / 2) + ',' + (this.height + margin.bottom - 5) + ')')
                .text('name group')

            this.update(this.data)
        }
    }
</script>