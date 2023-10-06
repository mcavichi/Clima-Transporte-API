import './Temperature.css';
import api from '../../api.json';
import data from '../../data.json';

const city = api.timezone
const currentTemp = api.current_weather.temperature
const currentDate = api.daily.time
const dailyMinTemp = api.daily.temperature_2m_min
const dailyMaxTemp = api.daily.temperature_2m_max
const icon = data[api.current_weather.weathercode].image_src
const text = data[api.current_weather.weathercode].name

const Temperature= () => {
    return (
        <div>
            <div>
                <div className='TemperatureContainer'>
                    <h3 className='City'>{city}</h3>
                    <img className='TemperatureIcon' src={icon} alt='icon'></img>
                    <p className='TemperatureText'>{text}</p>
                    <p className='TemperatureText'>Temperatura: {currentTemp}ºC</p><br/>
                    <p className='TemperatureText'>Fecha:<br/> {currentDate}</p>
                    <div>
                        <p>Min: {dailyMinTemp} | Max: {dailyMaxTemp}</p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Temperature;