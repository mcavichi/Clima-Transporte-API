import './Temperature.css';

const Temperature= () => {
    return (
        <div>
            <div>
                <div className='TemperatureContainer'>
                    <h3 className='City'>Buenos Aires,<br/>Argentina</h3>
                    <img className='TemperatureIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg' ></img>
                    <p className='TemperatureText'>Temperature: 17.3ºC</p><br/>
                    <p className='TemperatureText'>Date:<br/> Monday</p><br/>
                    <p className='TemperatureText'>Hour:<br/> 5.30 PM</p>
                </div> 
            </div>
        </div>
        )
}

export default Temperature;