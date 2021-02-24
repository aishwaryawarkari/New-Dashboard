import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

var data = [
  {
    id: "idData",
    name: "Data",
    // data: [
    //   { name: "Total space", y: 256, color: "#ee786c" },
    //   { name: "Used space", y: 180, color: "#feb95a" },
    //   { name: "", y: 100, color: "#efefef" },
    // ],
    data: [
      {
        name: "Total space",
        y: 20,
        color: "#ee786c",
      },
      { name: "Used space", y: 40, color: "#feb95a" },
      { name: "", y: 40, color: "#efefef" },
    ],
    showInLegend: false,
    dataLabels: {
      enabled: false,
    },
    size: "100%",
  },
];

const options = {
  chart: {
    type: "pie",
    height: "330",
  },

  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: "100%",
      borderWidth: 35,
      borderColor: null,
      slicedOffset: 60,
      dataLabels: {
        connectorWidth: 0,
      },
    },
  },
  title: {
    verticalAlign: "middle",
    floating: true,
    text: "65%",
    style: {
      fontWeight: "700",
      fontSize: "35px",
      marginTop: "40px",
    },
  },
  tooltip: {
    formatter: function () {
      return "<b>" + this.point.name + "</b>: " + this.y + " %";
    },
  },
  //   legend: {
  //     labelFormatter: function () {
  //       let data = "";

  //       if (this.name === "Total space")
  //         data = "<br/><b>" + "256" + "</b>" + " GB";
  //       if (this.name === "Used space")
  //         data = "<br/><b>" + "180" + "</b>" + " GB";
  //       return this.name + data;
  //     },
  //   },
  series: data,
};

const PieChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    allowChartUpdate={true}
    options={options}
  />
);

export default PieChart;
