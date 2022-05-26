import './RevenueAndGoal.css';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

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

export default function RevenueAndGoal(props) {
  const [recipe, setRecipe] = useState(153000);
  const [searchedRecipe, setSearchedRecipe] = useState(153000);
  const [percentage, setPercentage] = useState((recipe * 100) / 300000);

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
    <section className='revenue-and-goal'>
      <div className='first-line'>
        <div className='current-revenue'>
          <h3>{recipe},00</h3>
          <p>Receita Anual</p>
        </div>
        <div className='filtered-recipe'>
          <h3>153.147,00</h3>
          <p>Receita Filtrada</p>
        </div>
      </div>
      <div className='second-line'>
          <div>
            <h3>300.000,00</h3>
            <p>Meta Anul</p>
          </div>
          <CircularProgressWithLabel value={progress} />
      </div>
    </section>
  )
}
