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
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "230px", width: "561px", borderRadius: "20px" }}>
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
