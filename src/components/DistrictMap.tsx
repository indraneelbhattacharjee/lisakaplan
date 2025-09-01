import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(96, 165, 250, 0.2);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const MapDescription = styled.p`
  color: #a0aec0;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const MapWrapper = styled.div`
  margin: 2rem 0;
`;

interface DistrictMapProps {
  className?: string;
}

const DistrictMap: React.FC<DistrictMapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Create map centered on Sacramento
    const map = L.map(mapRef.current, {
      center: [38.5816, -121.4944], // Center of Sacramento
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: false,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
      boxZoom: false,
      keyboard: false,
    });

    // Add dark theme tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '©OpenStreetMap, ©CartoDB',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Load and display District 1 boundary from GeoJSON
    fetch('/Council_Districts_8935200304439670436.geojson')
      .then(response => response.json())
      .then(data => {
        // Find District 1 (Lisa Kaplan's district)
        const district1 = data.features.find((feature: any) => feature.properties.DISTNUM === "1");
        
        if (district1) {
          // Create District 1 polygon with real boundary data
          const district1Polygon = L.geoJSON(district1, {
            style: {
              color: '#60a5fa',
              weight: 3,
              fillColor: '#60a5fa',
              fillOpacity: 0.1,
            }
          }).addTo(map);

          // Fit map to District 1 bounds
          map.fitBounds(district1Polygon.getBounds(), { padding: [20, 20] });
        }
      })
      .catch(error => {
        console.error('Error loading district boundaries:', error);
        
        // Fallback to approximate boundaries if GeoJSON fails to load
        const fallbackBounds: L.LatLngBoundsLiteral = [
          [38.65, -121.55], // Southwest corner
          [38.75, -121.45], // Northeast corner
        ];
        
        const fallbackPolygon = L.polygon([
          [38.65, -121.55] as L.LatLngTuple,
          [38.75, -121.55] as L.LatLngTuple,
          [38.75, -121.45] as L.LatLngTuple,
          [38.65, -121.45] as L.LatLngTuple,
        ], {
          color: '#60a5fa',
          weight: 3,
          fillColor: '#60a5fa',
          fillOpacity: 0.1,
        }).addTo(map);
        
        map.fitBounds(fallbackBounds, { padding: [20, 20] });
      });

    // Add key landmarks in District 1 (North Natomas area)
    const landmarks = [
      {
        name: 'Sacramento International Airport',
        coords: [38.695, -121.59] as L.LatLngTuple,
        description: 'Major transportation hub serving the region'
      },
      {
        name: 'Natomas Regional Park',
        coords: [38.68, -121.52] as L.LatLngTuple,
        description: 'Community park and recreation area'
      },
      {
        name: 'North Natomas Library',
        coords: [38.67, -121.51] as L.LatLngTuple,
        description: 'Public library serving the community'
      },
      {
        name: 'Natomas Unified School District Office',
        coords: [38.69, -121.53] as L.LatLngTuple,
        description: 'Educational administration center'
      },
      {
        name: 'Natomas Community Center',
        coords: [38.66, -121.54] as L.LatLngTuple,
        description: 'Community gathering and event space'
      },
      {
        name: 'Natomas High School',
        coords: [38.66, -121.52] as L.LatLngTuple,
        description: 'Public high school serving North Natomas'
      },
      {
        name: 'Natomas Park Elementary',
        coords: [38.67, -121.53] as L.LatLngTuple,
        description: 'Elementary school in the Natomas area'
      }
    ];

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background: #60a5fa; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    // Add markers for landmarks
    landmarks.forEach(landmark => {
      const marker = L.marker(landmark.coords, { icon: customIcon }).addTo(map);
      
      marker.bindPopup(`
        <div style="text-align: center; padding: 10px;">
          <h4 style="margin: 0 0 5px 0; color: #1a202c; font-weight: 600;">${landmark.name}</h4>
          <p style="margin: 0; color: #4a5568; font-size: 14px;">${landmark.description}</p>
        </div>
      `);
    });

    // Add district label
    const districtLabel = L.divIcon({
      className: 'district-label',
      html: '<div style="background: rgba(96, 165, 250, 0.9); color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">District 1 - Lisa Kaplan</div>',
      iconSize: [180, 40],
      iconAnchor: [90, 20],
    });

    // Add district label after the GeoJSON loads
    fetch('/Council_Districts_8935200304439670436.geojson')
      .then(response => response.json())
      .then(data => {
        const district1 = data.features.find((feature: any) => feature.properties.DISTNUM === "1");
        if (district1) {
          // Calculate center of District 1 for label placement
          const bounds = L.geoJSON(district1).getBounds();
          const center = bounds.getCenter();
          L.marker(center, { icon: districtLabel }).addTo(map);
        }
      })
      .catch(() => {
        // Fallback label position
        L.marker([38.7, -121.5] as L.LatLngTuple, { icon: districtLabel }).addTo(map);
      });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <MapWrapper className={className}>
      <MapTitle>District 1 Interactive Map</MapTitle>
      <MapDescription>
        Explore the key areas and landmarks of Sacramento's District 1, including North Natomas and surrounding communities.
      </MapDescription>
      <MapContainer ref={mapRef} />
    </MapWrapper>
  );
};

export default DistrictMap;
