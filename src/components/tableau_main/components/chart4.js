import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Chart4 = () => {
  const [donneesMap, setDonneesMap] = useState(null);
  const [donneesMapData, setDonneesMapData] = useState(null);

  useEffect(() => {
    fetch("./../data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.carte);
        setDonneesMap(data.carte);
        setDonneesMapData(data.carte.data);
      })
      .catch((e) => {
        console.error("Erreur lors de la récupération des données JSON:", e);
      });
  }, []);

  const mapContainerStyle = {
    width: "400%",
    height: "400px",
  };
  const center = {
    lat: 0,
    lng: 0,
  };
  const zoomLevel = 0;

  return (
    <div>
      {donneesMap && <h3>{donneesMap.title} </h3>}
      <div className="row">
        <div className="graphMiddle">
        
            <MapContainer
              style={mapContainerStyle}
              center={center}
              zoom={zoomLevel}
              className="d-flex align-items-center"
              maxBounds={[
                [-90, -180],
                [90, 180],
              ]}
              maxBoundsViscosity={1.0}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {donneesMapData && donneesMapData.map((item, index) => (
                <Marker
                  key={index}
                  position={{ lat: item.lat, lng: item.lng }}
                  label={item.visits}
                >
                  <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
        
        </div>

        <div className="graphMiddle">
          {donneesMapData &&
            donneesMapData.map((item, index) => (
              <p
                key={index}
              >{` ${item.location.toString()}, Nombres de visites ${item.visits.toString()}`}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chart4;