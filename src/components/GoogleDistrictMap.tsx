import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Loader } from '@googlemaps/js-api-loader';

// Declare google namespace for TypeScript
declare global {
  interface Window {
    google: typeof google;
  }
}

const MapContainer = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;



const MapWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface GoogleDistrictMapProps {
  className?: string;
}

const GoogleDistrictMap: React.FC<GoogleDistrictMapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

        const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      // Load District 1 coordinates from GeoJSON
      fetch('/Council_Districts_8935200304439670436.geojson')
        .then(response => response.json())
        .then(data => {
          const district1 = data.features.find((feature: any) => feature.properties.DISTNUM === "1");
          
          if (district1 && mapRef.current) {
            // Convert GeoJSON coordinates to Google Maps format
            const coordinates = district1.geometry.coordinates[0].map((coord: number[]) => ({
              lat: coord[1],
              lng: coord[0]
            }));

            // Create map
            const map = new google.maps.Map(mapRef.current, {
              center: { lat: 38.5816, lng: -121.4944 },
              zoom: 12,
              styles: [
                {
                  featureType: 'all',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#7c93a3' }]
                },
                {
                  featureType: 'all',
                  elementType: 'labels.text.stroke',
                  stylers: [{ color: '#ffffff' }]
                },
                {
                  featureType: 'administrative.country',
                  elementType: 'geometry.stroke',
                  stylers: [{ color: '#4b6878' }]
                },
                {
                  featureType: 'administrative.land_parcel',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#64779e' }]
                },
                {
                  featureType: 'administrative.province',
                  elementType: 'geometry.stroke',
                  stylers: [{ color: '#4b6878' }]
                },
                {
                  featureType: 'landscape.man_made',
                  elementType: 'geometry.stroke',
                  stylers: [{ color: '#334e87' }]
                },
                {
                  featureType: 'landscape.natural',
                  elementType: 'geometry',
                  stylers: [{ color: '#023e58' }]
                },
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: [{ visibility: 'off' }]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#6b9a76' }]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry.fill',
                  stylers: [{ color: '#023e58' }]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#6b9a76' }]
                },
                {
                  featureType: 'road',
                  elementType: 'all',
                  stylers: [{ saturation: -70 }]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.fill',
                  stylers: [{ color: '#2b6674' }]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.icon',
                  stylers: [{ visibility: 'off' }]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#8a9ea8' }]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.stroke',
                  stylers: [{ color: '#1a2a6a' }]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.fill',
                  stylers: [{ color: '#1e3c78' }]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{ color: '#1e3c78' }]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#93a5ce' }]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.stroke',
                  stylers: [{ color: '#1e3c78' }]
                },
                {
                  featureType: 'transit',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#98a5be' }]
                },
                {
                  featureType: 'transit',
                  elementType: 'labels.text.stroke',
                  stylers: [{ color: '#1e3c78' }]
                },
                {
                  featureType: 'transit.line',
                  elementType: 'geometry.fill',
                  stylers: [{ color: '#3e4f88' }]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'geometry',
                  stylers: [{ color: '#3e4f88' }]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{ color: '#0e1626' }]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#4e6d70' }]
                }
              ]
            });

            // Create District 1 polygon
            new google.maps.Polygon({
              paths: coordinates,
              strokeColor: '#60a5fa',
              strokeOpacity: 0.8,
              strokeWeight: 3,
              fillColor: '#60a5fa',
              fillOpacity: 0.1,
              map: map
            });

            // Fit map to district bounds
            const bounds = new google.maps.LatLngBounds();
            coordinates.forEach((coord: { lat: number; lng: number }) => bounds.extend(coord));
            map.fitBounds(bounds);

            // Add district label
            const center = bounds.getCenter();
            new google.maps.Marker({
              position: center,
              map: map,
              label: {
                text: 'District 1 - Lisa Kaplan',
                className: 'district-label',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 'bold'
              },
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 0,
                fillColor: 'transparent',
                fillOpacity: 0,
                strokeColor: 'transparent',
                strokeWeight: 0
              }
            });

            // Add key landmarks
            const landmarks = [
              {
                name: 'Sacramento International Airport',
                position: { lat: 38.695, lng: -121.59 },
                description: 'Major transportation hub serving the region'
              },
              {
                name: 'Natomas Regional Park',
                position: { lat: 38.68, lng: -121.52 },
                description: 'Community park and recreation area'
              },
              {
                name: 'North Natomas Library',
                position: { lat: 38.67, lng: -121.51 },
                description: 'Public library serving the community'
              },
              {
                name: 'Natomas Unified School District Office',
                position: { lat: 38.69, lng: -121.53 },
                description: 'Educational administration center'
              },
              {
                name: 'Natomas Community Center',
                position: { lat: 38.66, lng: -121.54 },
                description: 'Community gathering and event space'
              }
            ];

            landmarks.forEach(landmark => {
              const marker = new google.maps.Marker({
                position: landmark.position,
                map: map,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: '#60a5fa',
                  fillOpacity: 1,
                  strokeColor: '#ffffff',
                  strokeWeight: 2
                }
              });

              const infoWindow = new google.maps.InfoWindow({
                content: `
                  <div style="padding: 10px; max-width: 200px;">
                    <h4 style="margin: 0 0 5px 0; color: #1a202c; font-weight: 600;">${landmark.name}</h4>
                    <p style="margin: 0; color: #4a5568; font-size: 14px;">${landmark.description}</p>
                  </div>
                `
              });

              marker.addListener('click', () => {
                infoWindow.open(map, marker);
              });
            });

            mapInstanceRef.current = map;
          }
        })
        .catch(error => {
          console.error('Error loading district boundaries:', error);
        });
    });
  }, []);

  return (
    <MapWrapper className={className}>
      <MapContainer ref={mapRef} />
    </MapWrapper>
  );
};

export default GoogleDistrictMap;
