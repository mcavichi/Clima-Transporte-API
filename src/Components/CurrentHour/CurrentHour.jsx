import './CurrentHour.css';

const CurrentHour = (props) => {
    return (
        <p className='TemperatureText'>Hora: {props.CurrentHour}</p>
    )
}

export default CurrentHour;