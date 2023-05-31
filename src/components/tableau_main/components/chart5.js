import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Chart5=()=>{

    const mapContainerStyle = {
        width: "300px",
        height: "200px",
      };
      const center = {
        lat: 0,
        lng: 0,
      };
      const zoomLevel = 0;
      const style={
        width:"100%",
        position:"absolute",
        background:"black",
        color:"white",
        height:"auto"
      }
      const position = [0, 0]


    return(
        <div style={style}>
           <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
        </div>
    )

}

export default Chart5
