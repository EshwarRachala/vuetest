<template>
    <div id='divbarchart'></div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                chart: null,
                xChart: null,
                yChart: null,
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

                const chart = this.chart
                const xChart = this.xChart
                const yChart = this.yChart
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

                var barWidth = width / data.length

                // select all bars on the graph, take them out, and exit the previous data set. 
                // then you can add/enter the new data set
                var bars = chart.selectAll('.bar')
                    .remove()
                    .exit()
                    .data(data)
                    // now actually give each rectangle the corresponding data
                bars.enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('x', function(d, i) {
                        return i * barWidth + 1
                    })
                    .attr('y', function(d) {
                        return yChart(d.age)
                    })
                    .attr('height', function(d) {
                        return height - yChart(d.age)
                    })
                    .attr('width', barWidth - 1)

                // left axis
                chart.select('.y')
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
            const data = this.data


            let height = this.height
            let width = this.width


            var margin = {
                top: 20,
                right: 20,
                bottom: 95,
                left: 50
            }
            width = 800
            height = 500

            this.height = height;
            this.width = width;

            this.chart = d3.select(this.$el).append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            this.xChart = d3.scaleBand()
                .range([0, width])

            this.yChart = d3.scaleLinear()
                .range([height, 0])

            this.xAxis = d3.axisBottom(this.xChart)
            this.yAxis = d3.axisLeft(this.yChart)

            // set up axes
            // left axis
            this.chart.append('g')
                .attr('class', 'y axis')
                .call(this.yAxis)

            // bottom axis
            this.chart.append('g')
                .attr('class', 'xAxis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(this.xAxis)
                .selectAll('text')
                .style('text-anchor', 'end')
                .attr('dx', '-.8em')
                .attr('dy', '.15em')
                .attr('transform', function(d) {
                    return 'rotate(-65)'
                })

            // add labels
            this.chart
                .append('text')
                .attr('transform', 'translate(-35,' + (height + margin.bottom) / 2 + ') rotate(-90)')
                .text('% of total watch time')

            this.chart
                .append('text')
                .attr('transform', 'translate(' + (width / 2) + ',' + (height + margin.bottom - 5) + ')')
                .text('name group')

            this.update(data)
        }
    }
</script>