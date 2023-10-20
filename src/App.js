import './App.css';
import React, { useState, useEffect } from 'react'
import WheatherDashboard from './Components/WheatherDashboard/WheatherDashboard';
import TransportDashboard from './Components/Transport/TransportDashboard';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {
  
  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.5562&longitude=-58.7074&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,windspeed_10m,winddirection_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=auto')
      .then(resp => resp.json()
      ).then(data => {
        console.log(data)
        setWeatherdata(data);
        setLoading(false);
      }).catch(ex => {
        console.error(ex);
      })
  }, [])
  
  if (loading) {
    return (
      <div>
        <Box className='Flex' sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        <p className='Flex'>Cargando...</p>
      </div>
    )
  }

  
  return (
    <div className="App">
      <WheatherDashboard weatherdata={weatherdata}/>
      <TransportDashboard/>
    </div>
  );
}

export default App;
