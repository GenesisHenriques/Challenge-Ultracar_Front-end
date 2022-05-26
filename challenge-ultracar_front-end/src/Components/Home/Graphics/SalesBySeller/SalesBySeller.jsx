import React from "react";
import { Chart } from "react-google-charts";
import './SalesBySeller.css';

export const data = [
  ["Vendedores", "Vendas", { role: 'annotation' }],
  ["Gênesis", 1000, 1000],
  ["Patricia", 1170, 1170],
  ["Marcos", 660, 660],
  ["Arthur", 1030, 1030],
];

export const options = {
  chartArea: {
    backgroundColor: {
        fill: '#FF0000',
        fillOpacity: 0,
     },
  },
  backgroundColor: {
    fill: '#FF0000',
    fillOpacity: 0
  },
  legend: { position: 'none' },
  vAxis: {
    textStyle:{color: '#FFF'},
    gridlines: {
      color: '#FFF',
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
      // fontName: 'Open Sans',
      color: 'white',
    }
  },
  colors: ['#4B5FDA']
};

export default function SalesBySeller() {
  return (
    <div className="sales-by-seller">
      <h3 id="sales-by-seller-title">Vendas por Vendedor</h3>
      <Chart
        chartType="BarChart"
        width="20em"
        height="90%"
        data={data}
        options={options}
      />
    </div>
  )
}
