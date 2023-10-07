import './SunriseSunset.css';
import api from '../../api.json';

const dailySunrise = api.daily.sunrise[0].slice(11,16)
const dailySunset = api.daily.sunset[0].slice(11,16)

const SunriseSunset = () => {
    return (
        <div>
            <div className="SSContainer">
                <div>
                    <img className='SSIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg' ></img>
                    <p className='SSText'>Sunrise:<br></br> {dailySunrise} AM</p>
                </div>
                <div>
                    <img className='SSIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/moonrise.svg' ></img>
                    <p className='SSText'>Sunset:<br></br> {dailySunset} PM</p>
                </div>
            </div>
        </div>
        )
}

export default SunriseSunset;