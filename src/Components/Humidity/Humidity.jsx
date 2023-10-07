import './Humidity.css';
import api from '../../api.json';

const CurrentHumidity = api.hourly.relativehumidity_2m[20]

const Humidity= () => {
    return (
        <div>
            <div className="HumidityContainer">
                <img className='HumidityIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg' ></img>
                <p className='HumidityText'>Humidity: {CurrentHumidity}%</p>
            </div>
        </div>
        )
}

export default Humidity;