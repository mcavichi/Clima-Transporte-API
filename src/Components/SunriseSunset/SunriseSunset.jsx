import './SunriseSunset.css';

const SunriseSunset = () => {
    return (
        <div>
            <div className="SSContainer">
                <div>
                    <img className='SSIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg' ></img>
                    <p className='SSText'>Sunrise:<br></br> 6 AM</p>
                </div>
                <div>
                    <img className='SSIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/moonrise.svg' ></img>
                    <p className='SSText'>Sunset:<br></br> 7.45 PM</p>
                </div>
            </div>
        </div>
        )
}

export default SunriseSunset;