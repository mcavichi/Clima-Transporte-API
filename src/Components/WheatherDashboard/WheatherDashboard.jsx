import './WheatherDashboard.css';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';
import WindStatus from '../WindStatus/WindStatus';
import SunriseSunset from '../SunriseSunset/SunriseSunset';
import Forecast from '../Forecast/Forecast';
import UvIndex from '../UvIndex/UvIndex';

const WheatherDashboard = () => {


  return (
    <div className="WheatherBackground">
      <section className='Block'>
      <Temperature className="Temperature"/>
      </section>
      <section className='Block'>
        <div className="Flex">
          <UvIndex className='UvIndex'  />
          <Humidity className='Humidity' />
          <WindStatus className='WindStatus' />
          <SunriseSunset className='SunriseSunset' />
        </div>
        <div className='Inline'>
          <Forecast/>
        </div>
      </section> 
    </div>
  )
}

export default WheatherDashboard;


