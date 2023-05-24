import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

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
    width: "400px",
    height: "400px",
  };
  const center = {
    lat: 51.5074,
    lng: -0.1278,
  };

  return (
    <div>
      {donneesMap && <h3>{donneesMap.title} </h3>}
      <div className="row">
        <div className="graphMiddle ">
          {donneesMapData ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={2}
              className="d-flex align-items-center"
            >
              {donneesMapData.map((item, index) => (
                <Marker
                  key={index}
                  position={{ lat: item.lat, lng: item.lng }}
                  label={item.visits.toString()}
                />
              ))}
            </GoogleMap>
          ) : (
            <p>on cherche map loading</p>
          )}
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
