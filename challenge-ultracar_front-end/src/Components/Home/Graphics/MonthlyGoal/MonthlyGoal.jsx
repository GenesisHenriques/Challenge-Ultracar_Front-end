import React from 'react';
import { Chart } from 'react-google-charts';
import './MonthlyGoal.css';

export const data = [
  [
    "Mês",
    "Vendas",
    { role: 'annotation' },
    "Meta(600)",
  ],
  ["Jan", 450, 450, 600],
  ["Fev", 390, 390, 600],
  ["Mar", 750, 750, 600],
  ["Abr", 300, 300, 600],
  ["Mai", 250, 250, 600],
  ["Jun", 390, 390, 600],
  ["Jul", 750, 750, 600],
  ["Ago", 250, 250, 600],
  ["Set", 390, 390, 600],
  ["Out", 750, 750, 600],
  ["Nov", 600, 600, 600],
  ["Dez", 250, 250, 600],
];

export const options = {
  backgroundColor: {
    fill: '#FF0000',
    fillOpacity: 0
  },
  vAxis: {
    textStyle:{color: 'none'},
    gridlines: {
      color: 'none',
    },
  },
  hAxis: {
    textStyle:{color: '#FFF', fontSize: 10},
    gridlines: {
      color: 'none',
    },
  },
  legend: {
    position: 'in',
    textStyle: {color: 'white', fontSize: 10},
    alignment: 'center',
  },
  colors: ['#4B5FDA', '#0DA632'],
  seriesType: "bars",
  series: { 1: { type: "line" } },
  annotations: {
    textStyle: {
      alwaysOutside: true,
      fontName: 'Open Sans',
      fontSize: 8,
      color: 'white',
    },
  },
};

export default function MonthlyGoal() {
  return (
    <div className='monthly-goal'>
      <h3 id="monthly-goal-title">Comparativo com o Ano Anterior</h3>
      <Chart
        chartType="ComboChart"
        width="38em"
        height="90%"
        data={data}
        options={options}
      />
    </div>
  )
}
