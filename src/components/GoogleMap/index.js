import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '600px',
  height: '350px'
}

const MapContainer = (props) => {
  console.log(props.google);

  return (
    <Map
      google={props.google}
      zoom={13}
      style={style}
      center={{
        lat: 51.2194,
        lng: 4.4025
      }}
    >

      <InfoWindow>
        <div>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCs8h-kmIU8PZYyq5A1_1duLNUaCwNRCng'
})(MapContainer)

// AIzaSyDSZFzCuIWEfcsGoFBMBEol8h69AZrWjRs