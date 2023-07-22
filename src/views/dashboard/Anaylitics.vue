<template>
    <div class="analytics custom_scroll">
        <h2>analytics</h2>
        <div class="top_part">
            <div class="analytics_card">
                <div class="item"
                    v-for="i in ['customers', 'orders', 'ernings', 'growths', 'completed', 'pending', 'processing', 'delivered', 'canceled']"
                    :key="i">
                    <div class="title">{{ i }}</div>
                    <div class="value">
                        {{ parseInt(Math.random() * 100000) }}
                    </div>
                </div>
            </div>
            <div class="chart_body">
                <canvas id="line"></canvas>
            </div>
        </div>
        <h3>Yearly income &amp; expense</h3>
        <div class="charts">
            <div class="chart_body">
                <canvas id="bar"></canvas>
            </div>
            <div class="chart_body">
                <canvas id="doughnut" class="doughnut"></canvas>
            </div>
            <div class="chart_body">
                <canvas id="polarArea" class="doughnut"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
// const  Chart  = await import('chart.js/auto');
import Chart from 'chart.js/auto';
Chart.defaults.color = '#9b9fa5';

export default {
    mounted: async function () {
        await this.init_bar_chart();
        await this.init_line_chart();
        await this.init_doughnut_chart();
        await this.init_polarArea_chart();
    },
    methods: {
        init_bar_chart: async function () {
            const data = [
                [
                    { year: 2010, count: 10 },
                    { year: 2011, count: 20 },
                    { year: 2012, count: 15 },
                    { year: 2013, count: 25 },
                    { year: 2014, count: 22 },
                    { year: 2015, count: 30 },
                    { year: 2016, count: 28 },
                ],
                [
                    { year: 2010, count: 15 },
                    { year: 2011, count: 10 },
                    { year: 2012, count: 25 },
                    { year: 2013, count: 15 },
                    { year: 2014, count: 32 },
                    { year: 2015, count: 40 },
                    { year: 2016, count: 65 },
                ],
            ];

            setTimeout(() => {
                new Chart(
                    document.getElementById('bar'),
                    {
                        type: 'bar',
                        data: {
                            labels: data[0].map(row => row.year),
                            datasets: [
                                {
                                    label: 'Income',
                                    data: data[0].map(row => row.count)
                                },
                                {
                                    label: 'Expense',
                                    data: data[1].map(row => row.count)
                                },
                            ]
                        }
                    }
                );
            }, 300);

        },
        init_line_chart: async function () {
            setTimeout(() => {
                new Chart(
                    document.getElementById('line'),
                    {
                        type: 'line',
                        data: {
                            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
                            datasets: [
                                {
                                    label: 'Monthly revinew',
                                    data: [65, 60, 80, 81, 75, 55, 40],
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0.1
                                }
                            ]
                        },
                        options: {
                            plugins: {
                                legend: {
                                    labels: {
                                        // This more specific font property overrides the global property
                                        font: {
                                            size: 14,
                                            family: "ubutu",
                                            style: 'normal'
                                        }
                                    }
                                }
                            }
                        }
                    }
                );
            }, 300);

        },
        init_doughnut_chart: async function () {
            setTimeout(() => {
                new Chart(
                    document.getElementById('doughnut'),
                    {
                        type: 'doughnut',
                        data: {
                            labels: [
                                'Revenue',
                                'Profit',
                                'Loss'
                            ],
                            datasets: [{
                                label: 'Accounts',
                                data: [300, 50, 100],
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)'
                                ],
                                hoverOffset: 4
                            }]
                        }
                    }
                );
            }, 300);

        },
        init_polarArea_chart: async function () {
            setTimeout(() => {
                new Chart(
                    document.getElementById('polarArea'),
                    {
                        type: 'polarArea',
                        data: {
                            labels: [
                                'Rent',
                                'Assets',
                                'Internet',
                                'Electricity',
                                'Salary'
                            ],
                            datasets: [{
                                label: 'Expenses',
                                data: [11, 16, 7, 3, 14],
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(75, 192, 192)',
                                    'rgb(255, 205, 86)',
                                    'rgb(201, 203, 207)',
                                    'rgb(54, 162, 235)'
                                ]
                            }]
                        }
                    }
                );
            }, 300);

        },
    }
}
</script>

<style></style>