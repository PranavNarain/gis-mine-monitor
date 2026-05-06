import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import leases from './leases';
import Dashboard from './Dashboard';
import Anomaly from './Anomaly';
import Expiry from './Expiry';
import LayerToggle from './LayerToggle';
import Notifications from './Notifications';

function App() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const [showAnomaly, setShowAnomaly] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [showExpiry, setShowExpiry] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDashboardMobile, setShowDashboardMobile] = useState(true );
  const [showLayersMobile, setShowLayersMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
          }
        },
        layers: [{ id: 'osm', type: 'raster', source: 'osm' }]
      },
      center: [79.0193, 18.1124],
      zoom: 7
    });

    mapRef.current = map;

    map.on('load', () => {
      setMapReady(true);
      map.addSource('leases', {
      type: 'geojson',
      data: leases,
      generateId: true
      });
      map.getSource('leases').setData(leases);

      map.addLayer({
        id: 'leases-fill',
        type: 'fill',
        source: 'leases',
        paint: {
          'fill-color': [
            'match', ['get', 'status'],
            'Active', '#22c55e',
            'Inactive', '#ef4444',
            '#aaaaaa'
          ],
          'fill-opacity': 0.5
        }
      });

      map.addLayer({
        id: 'leases-border',
        type: 'line',
        source: 'leases',
        paint: {
          'line-color': '#1e3a8a',
          'line-width': 2
        }
      });

      map.addLayer({
        id: 'leases-click-target',
        type: 'fill',
        source: 'leases',
        paint: {
          'fill-color': '#000000',
          'fill-opacity': 0
        }
      });

      map.on('click', 'leases-click-target', (e) => {
        if (e.features.length > 0) {
          const props = e.features[0].properties;
          setSelected(props);
          map.flyTo({ center: e.lngLat, zoom: 11 });
        }
      });

      map.on('mouseenter', 'leases-click-target', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'leases-click-target', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, []); 

const handleSearch = () => {
  const found = leases.features.find(f =>
    f.properties.id.toLowerCase().includes(search.toLowerCase()) ||
    f.properties.district.toLowerCase().includes(search.toLowerCase()) ||
    f.properties.mineral.toLowerCase().includes(search.toLowerCase()) ||
    f.properties.leaseholder.toLowerCase().includes(search.toLowerCase())
  );
  if (found) {
    const coords = found.geometry.coordinates[0];
    const lngLat = coords[0];
    mapRef.current.flyTo({ center: lngLat, zoom: 11 });
    setSelected(found.properties);
  }
};
  return (
    <div style={{ position: 'fixed', width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <div style={{
  position: 'absolute', top: 10, left: 10, zIndex: 1,
  display: 'flex', gap: '6px',
  width: isMobile ? 'calc(100% - 20px)' : 'auto'
}}>
  <input
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder={isMobile ? "Search lease, district..." : "Search by lease ID, district, mineral..."}
    style={{
      padding: '8px 10px', borderRadius: '6px',
      border: '1px solid #ccc',
      flex: 1,
      fontSize: isMobile ? '13px' : '14px',
      minWidth: 0
    }}
  />
  <button
    onClick={handleSearch}
    style={{
      padding: '8px 12px', background: '#1e3a8a',
      color: 'white', border: 'none',
      borderRadius: '6px', cursor: 'pointer',
      fontWeight: 'bold', fontSize: '13px',
      whiteSpace: 'nowrap', flexShrink: 0
    }}
  >
    Search
  </button>
</div>
<div style={{
  position: 'absolute',
  bottom: isMobile ? 60 : 'auto',
  top: isMobile ? 'auto' : 70,
  right: isMobile ? 'auto' : 20,
  left: isMobile ? 10 : 'auto',
  width: isMobile ? 'calc(100% - 20px)' : 'auto',
  zIndex: 1,
  display: 'flex',
  flexDirection: isMobile ? 'row' : 'column',
  flexWrap: isMobile ? 'wrap' : 'nowrap',
  gap: '6px',
  justifyContent: isMobile ? 'center' : 'flex-start'
}}>
  {isMobile && (
    <>
      <button
  onClick={() => setShowDashboardMobile(!showDashboardMobile)}
  style={{
    padding: '8px 10px', background: showDashboardMobile ? '#64748b' : '#1e3a8a', color: 'white',
    border: 'none', borderRadius: '6px', cursor: 'pointer',
    fontWeight: 'bold', fontSize: '11px', whiteSpace: 'nowrap'
  }}
>
  📊 {showDashboardMobile ? 'Hide' : 'Dashboard'}
</button>
      <button
        onClick={() => setShowLayersMobile(!showLayersMobile)}
        style={{
          padding: '8px 10px', background: '#15803d', color: 'white',
          border: 'none', borderRadius: '6px', cursor: 'pointer',
          fontWeight: 'bold', fontSize: '11px', whiteSpace: 'nowrap'
        }}
      >
        🗂 Layers
      </button>
    </>
  )}
  <button
    onClick={() => setShowAnomaly(true)}
    style={{
      padding: '8px 10px',
      background: '#dc2626', color: 'white',
      border: 'none', borderRadius: '6px',
      cursor: 'pointer', fontWeight: 'bold',
      fontSize: isMobile ? '11px' : '14px',
      whiteSpace: 'nowrap'
    }}
  >
    ⚠ {isMobile ? 'Anomaly' : 'AI Anomaly Monitor'}
  </button>
  <button
    onClick={() => setShowExpiry(true)}
    style={{
      padding: '8px 10px',
      background: '#d97706', color: 'white',
      border: 'none', borderRadius: '6px',
      cursor: 'pointer', fontWeight: 'bold',
      fontSize: isMobile ? '11px' : '14px',
      whiteSpace: 'nowrap'
    }}
  >
    📅 {isMobile ? 'Expiry' : 'Lease Expiry Monitor'}
  </button>
  <button
    onClick={() => setShowNotifications(true)}
    style={{
      padding: '8px 10px',
      background: '#2563eb', color: 'white',
      border: 'none', borderRadius: '6px',
      cursor: 'pointer', fontWeight: 'bold',
      fontSize: isMobile ? '11px' : '14px',
      whiteSpace: 'nowrap'
    }}
  >
    🔔 {isMobile ? 'Alerts' : 'Notifications'}
  </button>
</div>
      <div ref={mapContainer} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />

      {selected && (
        <div style={{
          position: 'absolute', top: 165, right: 20,
          background: 'white', padding: '16px', borderRadius: '8px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.2)', minWidth: '220px'
        }}>
          <h3 style={{ margin: '0 0 8px', color: '#1e3a8a' }}>Lease Details</h3>
          <p><b>ID:</b> {selected.id}</p>
          <p><b>Mineral:</b> {selected.mineral}</p>
          <p><b>Leaseholder:</b> {selected.leaseholder}</p>
          <p><b>District:</b> {selected.district}</p>
          <p><b>Status:</b> <span style={{ color: selected.status === 'Active' ? 'green' : 'red' }}>{selected.status}</span></p>
          <button onClick={() => setSelected(null)} style={{ marginTop: '8px', cursor: 'pointer' }}>Close</button>
        </div>
      )}
      {(!isMobile || showDashboardMobile) && (
  <Dashboard
    onLeaseClick={(f) => {
      const coords = f.geometry.coordinates[0];
      mapRef.current.flyTo({ center: coords[0], zoom: 11 });
      setSelected(f.properties);
      setShowDashboardMobile(false);
    }}
    isMobile={isMobile}
  />
)}
{showAnomaly && <Anomaly onClose={() => setShowAnomaly(false)} />}
  {showExpiry && <Expiry onClose={() => setShowExpiry(false)} />}
    {mapReady && (!isMobile || showLayersMobile) && (
  <LayerToggle map={mapRef.current} isMobile={isMobile} />
)}
    {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}
    </div>
  );
}

export default App;