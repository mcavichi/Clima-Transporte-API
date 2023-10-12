import './MinMaxTemp.css';

const MinMaxTemp = (props) => {
    return (
        <div>
            <p>Min: {props.DailyMinTemp} °C | Max: {props.DailyMaxTemp} °C</p>
        </div>
    )
}

export default MinMaxTemp;