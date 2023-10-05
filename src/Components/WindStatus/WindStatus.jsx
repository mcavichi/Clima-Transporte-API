import './WindStatus.css';

const WindStatus = () => {
    return (
        <div className="WindContainer">
            <div >
                <img className='WindIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/windsock.svg' ></img>
            </div>
            <div>
                <p className='WindText'>Wind Status: 11.12 km/h</p>
            </div>
        </div>
        )
}

export default WindStatus;