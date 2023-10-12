import './CurrentDate.css';

const CurrentDate = (props) => {
    return (
        <p className='TemperatureText'>Fecha: {props.CurrentDate}</p>
    )
}

export default CurrentDate;