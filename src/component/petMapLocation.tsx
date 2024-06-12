import GoogleMapReact from "google-map-react";
import { MapPin } from "phosphor-react";

interface test {
  lat: string | undefined;
  lng: string | undefined;
}

export function SimpleMap({ lat, lng }: test) {
  const defaultProps = {
    center: {
      lat: Number(lat),
      lng: Number(lng),
    },
    zoom: 30,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <div>
          <h1>
            <MapPin size={40} />
          </h1>
        </div>
      </GoogleMapReact>
    </div>
  );
}
