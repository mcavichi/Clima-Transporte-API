import './Forecast.css';

const Forecast = () => {
    return (
        <div className="ForecastContainer">
            <div>
                <h4 className='ForecastText'>Forecast</h4>
            </div>
            <div className='Flex'>
                <div>
                    <p className='ForecastText'>Lunes</p>
                    <img className='ForecastIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' ></img>
                    <div>
                        <p className='ForecastText'>Min: 15°C  |  Max: 25°C</p>
                    </div>
                </div>
                <div>
                    <p className='ForecastText'>Martes</p>
                    <img className='ForecastIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' ></img>
                    <div>
                        <p className='ForecastText'>Min: 15°C  |  Max: 25°C</p>
                    </div>
                </div>
                <div>
                    <p className='ForecastText'>Miercoles</p>
                    <img className='ForecastIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' ></img>
                    <div>
                        <p className='ForecastText'>Min: 15°C  |  Max: 25°C</p>
                    </div>
                </div>
                <div>
                    <p className='ForecastText'>Jueves</p>
                    <img className='ForecastIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' ></img>
                    <div>
                        <p className='ForecastText'>Min: 15°C  |  Max: 25°C</p>
                    </div>
                </div>
                <div>
                    <p className='ForecastText'>Viernes</p>
                    <img className='ForecastIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg' ></img>
                    <div>
                        <p className='ForecastText'>Min: 15°C  |  Max: 25°C</p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Forecast;