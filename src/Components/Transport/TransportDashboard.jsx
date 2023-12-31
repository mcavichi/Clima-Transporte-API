import './TransportDashboard.css';
import Mapa from '../Map/Map';
import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TransportDashboard = () => {
  const [transportdata, setTransportdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setTransportdata(data);
        setLoading(false);
      }).catch(ex => {
        console.error(ex);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
        .then(resp => resp.json())
        .then(data => {
          setTransportdata(data);
        }).catch(ex => {
          console.error(ex);
        });
    }, 31000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSelectedOptionChange = (option) => {
    setSelectedOption(option);
  };
  

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
    <div>
      <div className="TransportBackground">
        <Mapa
          transportdata={transportdata}
          selectedOption={selectedOption}
          onSelectedOptionChange={handleSelectedOptionChange}
        />
      </div>
    </div>
  )
}

export default TransportDashboard;
