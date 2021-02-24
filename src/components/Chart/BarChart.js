import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
    height: "300px",
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    crosshair: true,
    lineWidth: 1,
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    min: 110,
    max: 190,
    gridLineWidth: 1.3,
    gridLineDashStyle: "Dash",
    lineWidth: 1,

    title: {
      text: "",
    },
    labels: {
      formatter: function () {
        return this.pos + " GB";
      },
      style: {
        fontWeight: "600",
        fontSize: "14px",
        color: "#919191",
      },
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} GB</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.15,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Tokyo",
      data: [135, 110, 145, 145, 135, 110, 145],
      showInLegend: false,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#fcb15d"],
          [1, "#f58e65"],
        ],
      },
    },
    {
      name: "New York",
      data: [150, 136, 134, 136, 190, 160, 145],
      showInLegend: false,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#d97b7a"],
          [1, "#8d5ef3"],
        ],
      },
    },
    {
      name: "London",
      data: [165, 170, 156, 115, 152, 120, 163],
      showInLegend: false,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#2a988f"],
          [1, "#2c978f"],
        ],
      },
    },
  ],
};

const MyBarChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    // constructorType={'stockChart'}
    allowChartUpdate={true}
    options={options}
  />
);

export default MyBarChart;
