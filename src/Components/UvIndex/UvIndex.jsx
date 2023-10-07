import './UvIndex.css';
import api from '../../api.json';

const dailyUvIndexMax = api.daily.uv_index_max

const UvIndex = () => {
    return (
        <div>
            <div className="UvIndexContainer">
                <img className='UvIndexIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index.svg' ></img>
                <p className='UvIndexText'>Uv Index: {dailyUvIndexMax} </p>
            </div>
        </div>
        )
}

export default UvIndex;