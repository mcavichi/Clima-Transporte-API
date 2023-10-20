import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import './Map.css';
// import api2 from '../../api2.json';

// const position = [-34.599722222222, -58.381944444444]

const Mapa = ({transportdata}) => {

    return (
        <div>
            <MapContainer classname='leaflet-container' center={[-34.599722222222, -58.381944444444]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {transportdata.map((e) => {
                    return (
                    <Marker position={[e['latitude'], e['longitude']]}>
                        <Popup>
                            <p>Empresa: {e['agency_name']}</p>
                            <p>Linea: {e['route_short_name']}</p>
                            <p>Interno: {e['id']}</p>
                            <p>Destino: {e['trip_headsign']}</p>
                        </Popup>
                    </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}

export default Mapa;
