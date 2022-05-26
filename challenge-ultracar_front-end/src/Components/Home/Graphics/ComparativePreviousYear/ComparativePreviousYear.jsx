import React from 'react';
import { Chart } from "react-google-charts";
import './ComparativePreviousYear.css';

function calculatePercentage(current, past) {
  const percentagem = parseInt((current * 100) / past)
  return percentagem < 100 ? percentagem - 100 : `+${percentagem - 100}`;
}

export const data = [
  ["Vendedores", "Atual", "Passado", { role: 'annotation' }],
  ["Jan", 1000, 1080, `${calculatePercentage(1000, 1080)}%`],
  ["Fev", 1170, 780, `${calculatePercentage(1170, 780)}%`],
  ["Mar", 660, 1170, `${calculatePercentage(660, 1170)}%`],
  ["Abr", 1030, 1000, `${calculatePercentage(1030, 1000)}%`],
  ["Mai", 1000, 1080, `${calculatePercentage(1000, 1080)}%`],
  ["Jun", 1170, 870, `${calculatePercentage(1170, 870)}%`],
  ["Jul", 660, 1170, `${calculatePercentage(660, 1170)}%`],
  ["Ago", 1030, 1000, `${calculatePercentage(1030, 1000)}%`],
  ["Set", 900, 1080, `${calculatePercentage(900, 1080)}%`],
  ["Out", 1170, 700, `${calculatePercentage(1170, 700)}%`],
  ["Nov", 870, 1080, `${calculatePercentage(870, 1080)}%`],
  ["Dez", 1170, 660, `${calculatePercentage(1170, 660)}%`],
];

export const options = {
  isStacked: true,
  backgroundColor: {
    fill: '#FF0000',
    fillOpacity: 0
  },
  legend: {
    position: 'in',
    textStyle: {color: 'white', fontSize: 10},
    alignment: 'center',
  },
  vAxis: {
    textStyle:{color: '#FFF'},
    gridlines: {
      color: 'none',
    },
  },
  hAxis: {
    textStyle:{color: '#FFF'},
    gridlines: {
      color: 'none'
    },
  },
  annotations: {
    textStyle: {
      alwaysOutside: true,
      fontName: 'Open Sans',
      // fontSize: 8,
      color: 'white',
    },
  },
  colors: ['#4B5FDA', '#0DA632']
};

export default function ComparativePreviousYear() {
  return (
    <div className="comparative-previous-year">
      <h3 id="comparative-previous-year-title">Comparativo com o Ano Anterior</h3>
      <Chart
        chartType="ColumnChart"
        width="37em"
        height="90%"
        data={data}
        options={options}
      />
    </div>
  )
}
