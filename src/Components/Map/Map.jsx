import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';


const Mapa = ({ transportdata }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [mapCenter, setMapCenter] = useState([-34.599722222222, -58.381944444444]);
    const [searchTerm, setSearchTerm] = useState('');


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        };
    
    const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    };
    
    useEffect(() => {
    const marker = transportdata.find(
        (e) => e['route_short_name']  === selectedOption
    );
    setSelectedMarker(marker);
    if (marker) {
        setMapCenter([marker['latitude'], marker['longitude']]);
    } else {
        setMapCenter([-34.599722222222, -58.381944444444]);
    }
    }, [selectedOption, transportdata]);

    const sortedRoutes = Array.from(
    new Set(transportdata.map((e) => e['route_short_name']))
    ).sort();

    const filteredRoutes = sortedRoutes.filter((route) =>
    route.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    <div className='container'>
        <div className='dropdown'>
            <h3>COLECTIVOS</h3>
            <label>Linea: </label>
            <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder='Buscar número de línea'
            />
            <select value={selectedOption} onChange={handleChange}>
            <option value="">Elija una opción</option>
            {filteredRoutes.map((route) => {
                const marker = transportdata.find((e) => e['route_short_name'] === route);
                const tripHeadsign = marker ? marker['trip_headsign'] : '';
                return (
                <option key={route} value={route}>
                    {route} - {tripHeadsign}
                </option>
                );
            })}
            </select>
            <MapContainer
                className="leaflet-container"
                center={mapCenter}
                zoom={10}
                scrollWheelZoom={true}
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectedMarker && (
                <Marker
                    position={[selectedMarker['latitude'], selectedMarker['longitude']]}
                    key={selectedMarker['id']}
                >
                    <Popup>
                    <p>Empresa: {selectedMarker['agency_name']}</p>
                    <p>Linea: {selectedMarker['route_short_name']}</p>
                    <p>Interno: {selectedMarker['id']}</p>
                    <p>Destino: {selectedMarker['trip_headsign']}</p>
                    </Popup>
                </Marker>
                )}
            </MapContainer>
        </div>  
    </div>
    );
};

export default Mapa;