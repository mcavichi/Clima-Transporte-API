import './CurrentStatus.css';

const CurrentStatus = (props) => {
    return (
        <p className='TemperatureText'>{props.CurrentStatus}</p>
    )
}

export default CurrentStatus;