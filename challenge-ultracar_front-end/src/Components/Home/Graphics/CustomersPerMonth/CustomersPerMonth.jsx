import React, { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './CustomersPerMonth.css';

const data = [
  { month: "Jan", value: 10},
  { month: "Fev", value: 12},
  { month: "Mar", value: 15},
  { month: "Abr", value:  10},
  { month: "Mai", value: 11},
  { month: "Jun", value:  9},
  { month: "Jul", value:  15},
  { month: "Ago", value:  10},
  { month: "Set", value:  13},
  { month: "Out", value:  6},
  { month: "Nov", value:  25},
  { month: "Dez", value:  14},
]

function CircularProgressWithLabel(value) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        { console.log(value) }
        <Typography
          variant="caption"
          component="div"
          color="white"
        >{`${Math.round(value.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CustomersPerMonth() {
  const [recipe, setRecipe] = useState(data.reduce((acc, item) => acc + item.value, 0));
  const [percentage, setPercentage] = useState((recipe * 100) / 300);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress === percentage ? prevProgress : prevProgress + 1));
    }, 70);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='customer-per-month'>
      <h3>Novos Clientes por Mês</h3>
      <div className='general-container'>
        <div className='months-container'>
          {
            data.map((item) => (
              <div className='month-container'>
                <p>{item.month}</p>
                <p>{item.value}</p>
              </div>
            ))
          }
        </div>
        <div className='client-container'>
          <div>
            <p className='client-container-value'>{recipe}</p>
            <p className='client-container-text'>Novos</p>
            <p className='client-container-text'>Clientes</p>
          </div>
          <div>
            <CircularProgressWithLabel value={progress} />
            <p className='client-container-text'>Meta</p>
            <p className='client-container-value'>300</p>
          </div>
        </div>
      </div>
    </div>
  )
}
