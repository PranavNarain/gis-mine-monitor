import React from 'react';

function LayerToggle({ map, isMobile  }) {
  const [layers, setLayers] = React.useState({
    forest: false,
    water: false,
    ecozones: false,
    districts: false,
  });

  const toggleLayer = (layerName) => {
    if (!map) return;

    const newState = !layers[layerName];
    setLayers(prev => ({ ...prev, [layerName]: newState }));

    const layerConfigs = {
      forest: {
        id: 'forest-zone',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: { name: 'Nagarjunasagar Forest Zone' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[[79.1, 16.8], [79.5, 16.8], [79.5, 17.2], [79.1, 17.2], [79.1, 16.8]]]
                }
              },
              {
                type: 'Feature',
                properties: { name: 'Eturnagaram Wildlife Sanctuary' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[[79.8, 18.2], [80.2, 18.2], [80.2, 18.6], [79.8, 18.6], [79.8, 18.2]]]
                }
              }
            ]
          }
        },
        paint: { 'fill-color': '#15803d', 'fill-opacity': 0.35 }
      },
      water: {
        id: 'water-zone',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: { name: 'Nagarjuna Sagar Reservoir' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[[79.3, 16.5], [79.6, 16.5], [79.6, 16.8], [79.3, 16.8], [79.3, 16.5]]]
                }
              },
              {
                type: 'Feature',
                properties: { name: 'Srisailam Reservoir' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[[78.8, 16.0], [79.1, 16.0], [79.1, 16.3], [78.8, 16.3], [78.8, 16.0]]]
                }
              }
            ]
          }
        },
        paint: { 'fill-color': '#0ea5e9', 'fill-opacity': 0.4 }
      },
      ecozones: {
        id: 'eco-zone',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: { name: 'Amrabad Tiger Reserve Eco Zone' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[[78.5, 16.2], [78.9, 16.2], [78.9, 16.6], [78.5, 16.6], [78.5, 16.2]]]
                }
              }
            ]
          }
        },
        paint: { 'fill-color': '#f59e0b', 'fill-opacity': 0.35 }
      },
      districts: {
        id: 'district-zone',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: { name: 'Hyderabad District' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[[78.3, 17.2], [78.7, 17.2], [78.7, 17.6], [78.3, 17.6], [78.3, 17.2]]]
                }
              }
            ]
          }
        },
        paint: { 'fill-color': '#8b5cf6', 'fill-opacity': 0.2 }
      }
    };

    const config = layerConfigs[layerName];

    if (newState) {
      if (!map.getSource(config.id)) {
        map.addSource(config.id, config.source);
      }
      if (!map.getLayer(config.id)) {
        map.addLayer({
          id: config.id,
          type: 'fill',
          source: config.id,
          paint: config.paint
        }, 'leases-fill');
      }
    } else {
      if (map.getLayer(config.id)) map.removeLayer(config.id);
      if (map.getSource(config.id)) map.removeSource(config.id);
    }
  };

  const layerList = [
    { key: 'forest', label: '🌳 Forest Zones', color: '#15803d' },
    { key: 'water', label: '💧 Water Bodies', color: '#0ea5e9' },
    { key: 'ecozones', label: '🦁 Eco-Sensitive Zones', color: '#f59e0b' },
    { key: 'districts', label: '🗺 District Boundaries', color: '#8b5cf6' },
  ];

  return (
    <div style={{
  position: 'absolute',
  bottom: isMobile ? 120 : 20,
  right: isMobile ? 'auto' : 20,
  left: isMobile ? 20 : 'auto',
  zIndex: 2,
  background: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
  padding: '16px',
  width: isMobile ? 'calc(100% - 40px)' : '210px',
}}>
      <div style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '12px', fontSize: '14px' }}>
        🗂 Layer Controls
      </div>
      {layerList.map(layer => (
        <div
          key={layer.key}
          onClick={() => toggleLayer(layer.key)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '8px', marginBottom: '6px', borderRadius: '6px',
            border: `1px solid ${layers[layer.key] ? layer.color : '#e2e8f0'}`,
            background: layers[layer.key] ? `${layer.color}15` : '#f8fafc',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '13px', color: '#1e293b' }}>{layer.label}</span>
          <div style={{
            width: '36px', height: '20px', borderRadius: '10px',
            background: layers[layer.key] ? layer.color : '#cbd5e1',
            position: 'relative', transition: 'background 0.2s'
          }}>
            <div style={{
              position: 'absolute', top: '2px',
              left: layers[layer.key] ? '18px' : '2px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: 'white', transition: 'left 0.2s'
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LayerToggle;