const expiryData = [
  { id: 'TG-001', mineral: 'Granite', district: 'Nalgonda', leaseholder: 'Ravi Minerals Pvt Ltd', expiryDate: '2026-05-20', daysLeft: 18 },
  { id: 'TG-008', mineral: 'Mica', district: 'Nalgonda', leaseholder: 'Nalgonda Mica Corp', expiryDate: '2026-05-28', daysLeft: 26 },
  { id: 'TG-003', mineral: 'Coal', district: 'Adilabad', leaseholder: 'Deccan Coal Ltd', expiryDate: '2026-06-04', daysLeft: 33 },
  { id: 'TG-016', mineral: 'Granite', district: 'Wanaparthy', leaseholder: 'Wanaparthy Granite Pvt Ltd', expiryDate: '2026-06-18', daysLeft: 47 },
  { id: 'TG-005', mineral: 'Feldspar', district: 'Rangareddy', leaseholder: 'Hyderabad Minerals', expiryDate: '2026-07-01', daysLeft: 60 },
  { id: 'TG-012', mineral: 'Limestone', district: 'Suryapet', leaseholder: 'Suryapet Lime Industries', expiryDate: '2026-07-20', daysLeft: 79 },
  { id: 'TG-020', mineral: 'Dolomite', district: 'Vikarabad', leaseholder: 'Vikarabad Dolomite Co', expiryDate: '2026-08-10', daysLeft: 100 },
  { id: 'TG-024', mineral: 'Silica Sand', district: 'Jogulamba Gadwal', leaseholder: 'Jogulamba Silica Co', expiryDate: '2026-09-15', daysLeft: 136 },
];

function Expiry({ onClose }) {
  const critical = expiryData.filter(e => e.daysLeft <= 30);
  const warning  = expiryData.filter(e => e.daysLeft > 30 && e.daysLeft <= 60);
  const normal   = expiryData.filter(e => e.daysLeft > 60);

  const getColor = (days) => {
    if (days <= 30) return { bg: '#fef2f2', border: '#ef4444', text: '#dc2626', label: 'CRITICAL' };
    if (days <= 60) return { bg: '#fffbeb', border: '#f59e0b', text: '#d97706', label: 'WARNING' };
    return { bg: '#f0fdf4', border: '#22c55e', text: '#16a34a', label: 'OK' };
  };

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: 'white', borderRadius: '12px', padding: '24px',
        width: '620px', maxHeight: '80vh', overflowY: 'auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h2 style={{ margin: 0, color: '#1e3a8a' }}>Lease Expiry Monitor</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }}>✕</button>
        </div>

        <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '16px' }}>
          Leases expiring within 30 days are critical. System auto-notifies district officers for renewal action.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <div style={{ flex: 1, background: '#fef2f2', border: '1px solid #ef4444', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>{critical.length}</div>
            <div style={{ fontSize: '11px', color: '#555' }}>Critical (≤30 days)</div>
          </div>
          <div style={{ flex: 1, background: '#fffbeb', border: '1px solid #f59e0b', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d97706' }}>{warning.length}</div>
            <div style={{ fontSize: '11px', color: '#555' }}>Warning (31–60 days)</div>
          </div>
          <div style={{ flex: 1, background: '#f0fdf4', border: '1px solid #22c55e', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#16a34a' }}>{normal.length}</div>
            <div style={{ fontSize: '11px', color: '#555' }}>OK (60+ days)</div>
          </div>
        </div>

        {expiryData.map(e => {
          const c = getColor(e.daysLeft);
          return (
            <div key={e.id} style={{
              padding: '14px', marginBottom: '10px', borderRadius: '8px',
              border: `1px solid ${c.border}`, background: c.bg
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{e.id}</span>
                  <span style={{ marginLeft: '10px', color: '#64748b', fontSize: '13px' }}>{e.mineral} — {e.district}</span>
                </div>
                <span style={{
                  padding: '3px 10px', borderRadius: '20px', fontSize: '11px',
                  fontWeight: 'bold', background: c.border, color: 'white'
                }}>
                  {c.label}
                </span>
              </div>
              <div style={{ marginTop: '10px', display: 'flex', gap: '20px', fontSize: '13px' }}>
                <div>
                  <div style={{ color: '#64748b' }}>Leaseholder</div>
                  <div style={{ fontWeight: 'bold' }}>{e.leaseholder}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b' }}>Expiry Date</div>
                  <div style={{ fontWeight: 'bold', color: c.text }}>{e.expiryDate}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b' }}>Days Left</div>
                  <div style={{ fontWeight: 'bold', color: c.text }}>{e.daysLeft} days</div>
                </div>
              </div>
              {e.daysLeft <= 30 && (
                <div style={{
                  marginTop: '10px', padding: '8px', background: '#fee2e2',
                  borderRadius: '6px', fontSize: '12px', color: '#991b1b'
                }}>
                  ⚠ Renewal alert sent to District Officer — {e.district}. Immediate action required.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Expiry;