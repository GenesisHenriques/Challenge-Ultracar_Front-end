import React from 'react';
import Chart from 'react-google-charts';
import './MonthlySales.css';

export const data = [
  [
    "Mês",
    "Meta",
    { role: 'annotation' },
  ],
  ["Jan", 450, 450],
  ["Fev", 390, 390],
  ["Mar", 750, 750],
  ["Abr", 300, 300],
  ["Mai", 250, 250],
  ["Jun", 390, 390],
  ["Jul", 750, 750],
  ["Ago", 250, 250,],
  ["Set", 390, 390],
  ["Out", 750, 750],
  ["Nov", 600, 600],
  ["Dez", 250, 250],

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
    position: 'none',
    textStyle: {color: 'white', fontSize: 10},
    alignment: 'center',
  },
  colors: ['#4B5FDA', '#0DA632'],
  curveType: "function",
  annotations: {
    textStyle: {
      alwaysOutside: true,
      fontName: 'Open Sans',
      fontSize: 10,
      color: 'white',
    },
  },
};

export default function MonthlySales() {
  return (
    <div className='monthly-sales'>
      <h3 id="monthly-sales-title">Vendas por Mes</h3>
      <Chart
        chartType="LineChart"
        width="38em"
        height="90%"
        data={data}
        options={options}
      />
    </div>
  )
}
