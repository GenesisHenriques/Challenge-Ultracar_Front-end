import React from 'react';
import { Text, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import './DistributionByRegion.css';

const data = [
  {
    subject: 'MG',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'SP',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'RJ',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'SC',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'BA',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'RS',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function DistributionByRegion() {

  return (
    <ResponsiveContainer width="23%" height="90%" className='distribution-by-region'>
      <RadarChart
        cx="50%"
        cy="60%"
        outerRadius="70%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke='white' />
        <PolarRadiusAxis />
        <Radar name="Distribuição por Região" dataKey="A" stroke="#0DA632" fill="#0DA632" fillOpacity={0.2} />
        <text x={260 / 2} y={20} fill="#FFF" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="17" fontFamily='Roboto' fontWeight='bold'>Vendas por Região</tspan>
        </text>
      </RadarChart>
    </ResponsiveContainer>
  )
}
