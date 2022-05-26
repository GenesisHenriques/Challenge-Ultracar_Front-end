import React from 'react';
import './OrdersPerMonth.css';

const data = [
  { month: "Jan", value: 10},
  { month: "Fev", value: 12},
  { month: "Mar", value: 15},
  { month: "Abr", value:  9},
  { month: "Mai", value: 11},
  { month: "Jun", value:  3},
  { month: "Jul", value:  0},
  { month: "Ago", value:  0},
  { month: "Set", value:  0},
  { month: "Out", value:  0},
  { month: "Nov", value:  0},
  { month: "Dez", value:  0},
]

export default function OrdersPerMonth() {
  return (
    <div className='order-per-month'>
      <h3>Pedidos por Mês</h3>
      <div className='box-of-months'>
        {
          data.map((item) => (
            <div className='box-month'>
              <p>{item.month}</p>
              <p>{item.value}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
