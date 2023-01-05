import "./App.css";
import { useEffect, useRef } from "react";
import { Map as LeafletMap, TileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  let mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      let map = new LeafletMap(mapRef.current);
      map.setView([38.85, -78.2], 8);
      new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
    return () => {
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, []);
  return (
    <div className="App">
      <div className="map" ref={mapRef}></div>
    </div>
  );
}

export default App;
