import './WheatherDashboard.css';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';
import WindStatus from '../WindStatus/WindStatus';
import SunriseSunset from '../SunriseSunset/SunriseSunset';
import Forecast from '../Forecast/Forecast';
import UvIndex from '../UvIndex/UvIndex';
import Location from '../Location/Location';
// import api from '../../api.json';
import data from '../../data.json';
import CurrentIcon from '../CurrentIcon/CurrentIcon';
import CurrentStatus from '../CurrentStatus/CurrentStatus';
import CurrentDate from '../CurrentDate/CurrentDate';
import CurrentHour from '../CurrentHour/CurrentHour';
import MinMaxTemp from '../MinMaxTemp/MinMaxTemp';


// const city = api.timezone
// const icon = data[weatherdata.current_weather.weathercode].image_src
// const currentTemp = api.current_weather.temperature
// const currentStatus = data[api.current_weather.weathercode].name
// const currentDate = api.daily.time
// const currentHour = api.current_weather.time.slice(11,16)
// const dailyMinTemp = api.daily.temperature_2m_min
// const dailyMaxTemp = api.daily.temperature_2m_max
// const dailyUvIndexMax = api.daily.uv_index_max
// const currentHumidity = api.hourly.relativehumidity_2m[20]
// const currentWindSpeed = api.current_weather.windspeed
// const dailySunrise = api.daily.sunrise[0].slice(11,16)
// const dailySunset = api.daily.sunset[0].slice(11,16)
// const temp = api['hourly']['temperature_2m']
// const hour = api['hourly']['time']


const WheatherDashboard = ({weatherdata}) => {
  const icon = data[weatherdata.current_weather.weathercode].image_src
  const currentStatus = data[weatherdata.current_weather.weathercode].name

  return (
    <div className="WheatherBackground">
      <section className='Block Container'>
      <Location City = {weatherdata.timezone} />
      <CurrentIcon CurrentIcon = {icon}/>
      <Temperature  CurrentTemp = {weatherdata.current_weather.temperature}/>
      <CurrentStatus CurrentStatus = {currentStatus}/>
      <CurrentDate CurrentDate = {weatherdata.daily.time[0]} />
      <CurrentHour CurrentHour = {weatherdata.current_weather.time.slice(11,16)} />
      <MinMaxTemp DailyMinTemp = {weatherdata.daily.temperature_2m_min[0]} DailyMaxTemp = {weatherdata.daily.temperature_2m_max[0]}/>
      </section>
      <section className='Block'>
        <div className="Flex">
          <UvIndex className='UvIndex' UvIndex = {weatherdata.daily.uv_index_max[0]} />
          <Humidity className='Humidity' Humidity = {weatherdata.hourly.relativehumidity_2m[weatherdata.current_weather.time.slice(11,13)]} />
          <WindStatus className='WindStatus' WindStatus = {weatherdata.current_weather.windspeed} />
          <SunriseSunset className='SunriseSunset' Sunrise = {weatherdata.daily.sunrise[0].slice(11,16)} Sunset = {weatherdata.daily.sunset[0].slice(11,16)} />
        </div>
        <div className='Inline'>
          <Forecast Temp={weatherdata.hourly.temperature_2m.slice(0,24)}/>
        </div>
      </section> 
    </div>
  )
}

export default WheatherDashboard;


