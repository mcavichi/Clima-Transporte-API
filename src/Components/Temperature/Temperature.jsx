import './Temperature.css';

const Temperature= (props) => {
    return (
        <div>
            <div>
                <div>
                    <p className='TemperatureText'>Temperatura: {props.CurrentTemp}ºC</p><br/>
                </div>
            </div>
        </div>
        )
}

export default Temperature;