import './WindStatus.css';
import api from '../../api.json'

const currentWindSpeed = api.current_weather.windspeed

const WindStatus = () => {
    return (
        <div className="WindContainer">
            <div >
                <img className='WindIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/windsock.svg' ></img>
            </div>
            <div>
                <p className='WindText'>Wind Status:<br/>{currentWindSpeed}  km/h</p>
            </div>
        </div>
        )
}

export default WindStatus;