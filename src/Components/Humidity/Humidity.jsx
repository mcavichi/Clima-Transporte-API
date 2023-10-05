import './Humidity.css';

const Humidity= () => {
    return (
        <div>
            <div className="HumidityContainer">
                <img className='HumidityIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg' ></img>
                <p className='HumidityText'>Humidity: 12%</p>
            </div>
        </div>
        )
}

export default Humidity;