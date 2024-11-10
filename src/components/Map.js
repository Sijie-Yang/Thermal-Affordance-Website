import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 550px;
`;

const MapComponent = ({ city }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Exit if map is already initialized

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lqaWV5IiwiYSI6ImNtMXZoZnByeTBhYmoyanM3enV5dnVmcHMifQ.g9DfQdF1Le07vY_cUWJmCA';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/sijiey/cm1vjih63011101qrf60eaz1f',
      projection: 'globe',
      zoom: 1,
      center: [30, 15]
    });

    // Additional map initialization code can be added here
  }, []);

  // City switching logic
  useEffect(() => {
    if (!map.current || !city) return;

    const cityCoordinates = {
      singapore: [103.8198, 1.3521],
      hongkong: [114.1694, 22.3193],
      bangkok: [100.5018, 13.7563]
    };

    if (cityCoordinates[city]) {
      map.current.flyTo({
        center: cityCoordinates[city],
        zoom: 10
      });
    }
  }, [city]);

  if (!city) {
    return <div>Please select a city to view the map</div>;
  }

  return <MapContainer ref={mapContainer} />;
};

export default MapComponent;