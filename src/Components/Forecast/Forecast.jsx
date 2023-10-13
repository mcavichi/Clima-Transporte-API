import './Forecast.css';
// import api from '../../api.json';
import { LineChart } from '@mui/x-charts/LineChart';

// const temp = api['hourly']['temperature_2m']
// const hour = api['hourly']['time']

const Forecast = (props) => {
    const chartTheme = {
        palette: {
            primary: {
                main: 'FF8000', 
            },
        },
    };
    return (
        <div className="ForecastContainer">
            <div className='Flex' style={{ width: '100%', height: '70px' }}>
                <LineChart 
                    xAxis={[{ data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23] }]}
                    series={[
                        {
                        label: 'Temperatura por hora',
                        data: props.Temp,
                        area: true,
                        },
                    ]}
                    width={800}
                    height={220}
                    xAxisLabel="Hora"
                    yAxisLabel="Temperatura"
                    theme={chartTheme}
                />
            </div>
        </div>
        )
}

export default Forecast;

