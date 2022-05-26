import React from 'react';
import Chart from 'react-google-charts';
import './SalesByType.css';

export const data = [
  ["Vendedores", "Vendas", { role: 'annotation' }],
  ["Vendas de peça", 1000, 1000],
  ["Vendas de equipamento", 1170, 1170],
  ["Manutenção", 660, 660],
  ["Instalações", 1030, 1030],
  ["Consultoria", 1030, 1030],
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

export default function SalesByType() {
  return (
    <div className="sales-by-type">
      <h3 id="sales-by-type-title">Vendas por Tipo de Serviço</h3>
      <Chart
        chartType="BarChart"
        width="30em"
        height="90%"
        data={data}
        options={options}
      />
    </div>
  )
}
