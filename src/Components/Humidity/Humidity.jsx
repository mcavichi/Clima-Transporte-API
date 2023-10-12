import './Humidity.css';

const Humidity= (props) => {
    return (
        <div>
            <div className="HumidityContainer">
                <img className='HumidityIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg' ></img>
                <p className='HumidityText'>Humidity: {props.Humidity}%</p>
            </div>
        </div>
        )
}

export default Humidity;