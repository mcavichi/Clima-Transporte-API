import './UvIndex.css';

const UvIndex = (props) => {
    return (
        <div>
            <div className="UvIndexContainer">
                <img className='UvIndexIcon' src='https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index.svg' ></img>
                <p className='UvIndexText'>Uv Index: {props.UvIndex} </p>
            </div>
        </div>
        )
}

export default UvIndex;