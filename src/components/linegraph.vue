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
                this.update()
            }
        },
        methods: {
            update: function () {
                const d3 = this.$d3
                const parseTime = d3.timeParse('%d-%b-%y')

                this.data.forEach(
                    (d) => {
                        d.date = parseTime(d.date)
                        d.close = +d.close
                    })

                this.x = this.x.domain(d3.extent(this.data, (d) => d.date))

                this.y = this.y.domain([0, d3.max(this.data, (d) => d.close)])
             
                this.svg.select('.x').remove()

                this.svg.select('.y').remove()

                this.svg.append('g').attr('transform', 'translate(0,' + this.height + ')').call(d3.axisBottom(this.x).ticks(15))

                this.svg.append('g').call(d3.axisLeft(this.y))

                this.svg.select('.line').remove()

                 this.svg.select('.circle').remove()
                 
                 const line = d3.line().curve(d3.curveCatmullRom.alpha(0)).x((d) => this.x(d.date)).y((d) => this.y(d.close))

                 this.svg.append('path').data([this.data]).attr('class', 'line').attr('d', line)
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

            const parseTime = d3.timeParse('%d-%b-%y')

            this.data.forEach(
                (d) => {
                    d.date = parseTime(d.date)
                    d.close = +d.close
                })

            this.width = document.getElementById('chartcontainer').offsetWidth

            this.height = (document.getElementById('chartcontainer').offsetHeight - document.getElementById('divgraph').offsetHeight)

            this.svg =
                d3.select(this.$el)
                .append('svg')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('viewBox', '0 0 ' + (Math.max(this.width, this.height) + margin.left + margin.right) + ' ' +
                    (Math.min(this.width, this.height) + margin.top + margin.bottom))
                .attr('preserveAspectRatio', 'xMinYMin meet')
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            this.x = d3.scaleTime().range([0, this.width]).domain(d3.extent(this.data, (d) => d.date))

            this.y = d3.scaleLinear().range([this.height, 0]).domain([0, d3.max(this.data, (d) => d.close)])

            this.svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + this.height + ')').call(d3.axisBottom(this.x).ticks(15))

            this.svg.append('g').attr('class', 'y axis').call(d3.axisLeft(this.y))

            const line = d3.line().curve(d3.curveCatmullRom.alpha(0)).x((d) => this.x(d.date)).y((d) => this.y(d.close))

            this.svg.append('g')
            .attr('class', 'circle')
            .selectAll('circle')
            .data(this.data)
            .enter()
                .append('circle').attr('cx', (d) => this.x(d.date))
                .attr('cy', (d) => this.y(d.close))
                .attr('r', 6)
                .attr('fill', 'red')
                .attr('stroke', 'black')

            this.svg.append('path').data([this.data]).attr('class', 'line').attr('d', line)
        }
    }
</script>