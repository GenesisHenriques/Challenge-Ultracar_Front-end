import { useState } from 'react';
import MyContext from './Components/MyContext';

import './App.css';
import Home from './Pages/Home/Home';

function App() {
  const [months, setMonths] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [year, setYear] = useState([]);
  const contextValue = {
    months,
    setMonths,
    sellers,
    setSellers,
    year,
    setYear,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Home />
      </div>
    </MyContext.Provider>
  );
};

export default App;
