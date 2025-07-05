'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Icon from '../Icon';
import { Search } from 'lucide-react';
import Table from './components/Table';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Page = () => {
    const [levelOptions, setLevelOptions] = useState(null);
    const [gaugeOptions, setGaugeOptions] = useState(null);
    const [insightOptions, setInsightOptions] = useState(null);

    useEffect(() => {
        // Bar Chart - Level
        setLevelOptions({
            series: [
                {
                    name: 'PRODUCT A',
                    data: ['', 44, 55, 41, 67, 22, 18],
                },
                {
                    name: 'PRODUCT B',
                    data: ['', 13, 23, 20, 8, 13, 8],
                },
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 140,
                    stacked: true,
                    stackType: 'normal',
                    sparkline: { enabled: true },
                    toolbar: { show: false },
                },
                colors: ['#A9DFD8', '#255682'],
                xaxis: {
                    categories: [
                        '2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4',
                        '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'
                    ],
                    labels: { show: false },
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                },
                fill: { opacity: 1 },
                legend: { show: false },
                yaxis: {
                    labels: { show: false },
                },
                dataLabels: { enabled: false },
                grid: {
                    show: false,
                    padding: { top: 0, right: 0, bottom: 0, left: 0 },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        endingShape: 'rounded',
                    },
                },
            },
        });

        // Gauge Chart - Success
        setGaugeOptions({
            series: [76],
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: { enabled: true },
                    background: 'transparent',
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#255682",
                            strokeWidth: '97%',
                            margin: 2,
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                color: '#444',
                                opacity: 1,
                                blur: 2,
                            },
                        },
                        dataLabels: {
                            name: { show: false },
                            value: {
                                offsetY: -2,
                                fontSize: '28px',
                                color: '#fff',
                            },
                        },
                    },
                },
                grid: { padding: { top: -10 } },
                fill: {
                    colors: ['#A9DFD8'],
                },
                labels: ['Average Results'],
            },
        });

        // Area Chart - Insights
        const series = {
            monthDataSeries1: {
                prices: [
                    8100, 8120, 8140, 8160, 8140, 8120, 8100, 8080, 8060, 8040,
                    8020, 8000, 7980, 7960, 7940
                ],
                dates: [
                    "2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05",
                    "2023-01-06", "2023-01-07", "2023-01-08", "2023-01-09", "2023-01-10",
                    "2023-01-11", "2023-01-12", "2023-01-13", "2023-01-14", "2023-01-15"
                ],
            }
        };

        setInsightOptions({
            series: [
                {
                    name: "STOCK ABC",
                    data: series.monthDataSeries1.prices
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    zoom: { enabled: false },
                },
                dataLabels: { enabled: false },
                stroke: { curve: 'straight' },
                title: {
                    text: 'Fundamental Analysis of Stocks',
                    align: 'left',
                },
                subtitle: {
                    text: 'Price Movements',
                    align: 'left',
                },
                labels: series.monthDataSeries1.dates,
                xaxis: { type: 'datetime' },
                yaxis: { opposite: true },
                legend: { horizontalAlign: 'left' },
            }
        });

        // Insight Chart
        setInsightOptions({
            series: [
                {
                    name: "Data",
                    data: [
                        100, 90, 450, 85, 220, 430, 300, 260, 500, 470,
                        450, 410
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 100,
                    width: '100%',
                    background: 'transparent',
                    toolbar: { show: false },
                    zoom: { enabled: false }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    colors: ['#bafcdf']
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0.1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#bafcdf',
                                opacity: 0.6
                            },
                            {
                                offset: 100,
                                color: '#2d70a3',
                                opacity: 0
                            }
                        ]
                    }
                },
                xaxis: {
                    categories: [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ],
                    labels: {
                        show: true,
                        style: {
                            colors: '#ffffff',
                            fontSize: '14px'
                        }
                    },
                    floating: false,
                    position: 'bottom',
                    axisBorder: { show: false },
                    axisTicks: { show: false }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#ffffff',
                            fontSize: '14px'
                        }
                    }
                },
                grid: {
                    show: false
                },
                tooltip: {
                    theme: 'dark'
                },
                legend: {
                    show: false
                }
            }
        });
    }, []);

    const [rows, setRows] = useState([
        { id: 1, name: 'Alice', city: 'Lahore', charges: '200$', weight: '10kg', country: 'Pakistan', hst: '12345', status: 'Incomplete' },
        { id: 2, name: 'Bob', city: 'Karachi', charges: '150$', weight: '7kg', country: 'Pakistan', hst: '67890', status: 'In Transit' },
        { id: 3, name: 'Charlie', city: 'Multan', charges: '180$', weight: '9kg', country: 'Pakistan', hst: '54321', status: 'Canceled' },
        { id: 4, name: 'David', city: 'Islamabad', charges: '250$', weight: '12kg', country: 'Pakistan', hst: '11223', status: 'Shipped' },
        { id: 5, name: 'Emma', city: 'Peshawar', charges: '130$', weight: '6kg', country: 'Pakistan', hst: '99887', status: 'Canceled' },
        { id: 6, name: 'Faisal', city: 'Quetta', charges: '210$', weight: '11kg', country: 'Pakistan', hst: '45678', status: 'In Transit' },
    ]);

    return (
        <div className='home'>
            <div className="col">
                <div className="shipments">
                    <h2>Shipments</h2>
                    <h4>Summary</h4>
                    <div className="cards">
                        <div className="card">
                            <Icon name="analytics" />
                            <h2>50</h2>
                            <h4>Total Shipments</h4>
                            <h5>+10% from yesterday</h5>
                        </div>
                        <div className="card">
                            <Icon name="checked" />
                            <h2>29</h2>
                            <h4>Completed</h4>
                            <h5>+8% from yesterday</h5>
                        </div>
                        <div className="card">
                            <Icon name="bagDown" />
                            <h2>9</h2>
                            <h4>Canceled</h4>
                            <h5>+2% from yesterday</h5>
                        </div>
                        <div className="card">
                            <Icon name="route" />
                            <h2>12</h2>
                            <h4>In Transit</h4>
                            <h5>+3% from yesterday</h5>
                        </div>
                    </div>
                </div>
                <div className="level">
                    <h2>Level</h2>
                    <h4>04</h4>
                    {levelOptions && (
                        <ReactApexChart
                            options={levelOptions.options}
                            series={levelOptions.series}
                            type="bar"
                            height={140}
                        />
                    )}
                    <h5><div className="dot"></div> <span>Trust</span></h5>
                </div>
            </div>
            <div className="col">
                <div className="success">
                    <h2>Success Rate</h2>
                    <h4>Total Shipped</h4>
                    <h1>29+</h1>
                    <h4>48% More than last Month</h4>
                    {gaugeOptions && (
                        <ReactApexChart
                            options={gaugeOptions.options}
                            series={gaugeOptions.series}
                            type="radialBar"
                            height={270}
                        />
                    )}
                </div>
                <div className="insights">
                    <h2>Insights</h2>
                    {insightOptions && (
                        <ReactApexChart
                            options={insightOptions.options}
                            series={insightOptions.series}
                            type="area"
                            height={230}
                        />
                    )}
                </div>
            </div>
            <div className="col flex-start">
                <div className="search">
                    <Search />
                    <input type="search" placeholder='Search...' />
                </div>
                <select>
                    <option value="" hidden>Filter</option>
                </select>
            </div>
            <div className="col -col-table">
                <h2>Recent Shipments</h2>
                <Table rows={rows} setRows={setRows} />
            </div>
        </div>
    );
};

export default Page;
