import leases from './leases';

function Dashboard({ onLeaseClick }) {
  const active = leases.features.filter(f => f.properties.status === 'Active').length;
  const inactive = leases.features.filter(f => f.properties.status === 'Inactive').length;

  return (
    <div style={{
  position: 'absolute', bottom: 20, left: 20, zIndex: 1,
  background: 'white', borderRadius: '10px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
  width: '280px', padding: '16px',
  maxHeight: '420px', display: 'flex', flexDirection: 'column'
}}>
      <h3 style={{ margin: '0 0 12px', color: '#1e3a8a' }}>Mine Dashboard</h3>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <div style={{
          flex: 1, background: '#f0fdf4', border: '1px solid #22c55e',
          borderRadius: '8px', padding: '10px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#16a34a' }}>{active}</div>
          <div style={{ fontSize: '12px', color: '#555' }}>Active Leases</div>
        </div>
        <div style={{
          flex: 1, background: '#fef2f2', border: '1px solid #ef4444',
          borderRadius: '8px', padding: '10px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>{inactive}</div>
          <div style={{ fontSize: '12px', color: '#555' }}>Inactive Leases</div>
        </div>
        <div style={{
          flex: 1, background: '#eff4ff', border: '1px solid #2563eb',
          borderRadius: '8px', padding: '10px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>{active + inactive}</div>
          <div style={{ fontSize: '12px', color: '#555' }}>Total Leases</div>
        </div>
      </div>

      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>All Leases</div>
      <div style={{ overflowY: 'auto', flex: 1 }}>
      {leases.features.map(f => (
        <div
          key={f.properties.id}
          onClick={() => onLeaseClick(f)}
          style={{
            padding: '8px', marginBottom: '6px', borderRadius: '6px',
            background: '#f8fafc', border: '1px solid #e2e8f0',
            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{f.properties.id}</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>{f.properties.district} — {f.properties.mineral}</div>
          </div>
          <span style={{
            fontSize: '10px', padding: '2px 6px', borderRadius: '4px',
            background: f.properties.status === 'Active' ? '#dcfce7' : '#fee2e2',
            color: f.properties.status === 'Active' ? '#16a34a' : '#dc2626'
          }}>
            {f.properties.status}
          </span>
        </div>
      ))}
        </div>
    </div>
  );
}

export default Dashboard;