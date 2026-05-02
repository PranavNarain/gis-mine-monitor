const anomalies = [
  { id: 'TG-001', mineral: 'Granite', district: 'Nalgonda', normal: 120, current: 374, status: 'ALERT' },
  { id: 'TG-004', mineral: 'Quartz', district: 'Mahbubnagar', normal: 80, current: 285, status: 'ALERT' },
  { id: 'TG-013', mineral: 'Coal', district: 'Mancherial', normal: 175, current: 420, status: 'ALERT' },
  { id: 'TG-017', mineral: 'Iron Ore', district: 'Jayashankar Bhupalpally', normal: 210, current: 498, status: 'ALERT' },
  { id: 'TG-002', mineral: 'Limestone', district: 'Karimnagar', normal: 95, current: 102, status: 'NORMAL' },
  { id: 'TG-003', mineral: 'Coal', district: 'Adilabad', normal: 200, current: 198, status: 'NORMAL' },
  { id: 'TG-006', mineral: 'Iron Ore', district: 'Khammam', normal: 160, current: 155, status: 'NORMAL' },
  { id: 'TG-007', mineral: 'Bauxite', district: 'Warangal', normal: 140, current: 148, status: 'NORMAL' },
  { id: 'TG-009', mineral: 'Dolomite', district: 'Nizamabad', normal: 110, current: 108, status: 'NORMAL' },
  { id: 'TG-010', mineral: 'Manganese', district: 'Adilabad', normal: 90, current: 94, status: 'NORMAL' },
];

function Anomaly({ onClose }) {
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, color: '#1e3a8a' }}>AI Anomaly Detection</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }}>✕</button>
        </div>

        <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '13px' }}>
          System is continuously monitoring production volumes against historical baselines. Mines flagged in red are showing unusual activity.
        </p>

        {anomalies.map(a => {
          const deviation = Math.round(((a.current - a.normal) / a.normal) * 100);
          const isAlert = a.status === 'ALERT';
          return (
            <div key={a.id} style={{
              padding: '14px', marginBottom: '10px', borderRadius: '8px',
              border: `1px solid ${isAlert ? '#ef4444' : '#22c55e'}`,
              background: isAlert ? '#fef2f2' : '#f0fdf4'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{a.id}</span>
                  <span style={{ marginLeft: '10px', color: '#64748b', fontSize: '13px' }}>{a.mineral} — {a.district}</span>
                </div>
                <span style={{
                  padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold',
                  background: isAlert ? '#ef4444' : '#22c55e', color: 'white'
                }}>
                  {isAlert ? '⚠ ALERT' : '✓ NORMAL'}
                </span>
              </div>

              <div style={{ marginTop: '10px', display: 'flex', gap: '20px', fontSize: '13px' }}>
                <div>
                  <div style={{ color: '#64748b' }}>Baseline (avg/month)</div>
                  <div style={{ fontWeight: 'bold' }}>{a.normal} units</div>
                </div>
                <div>
                  <div style={{ color: '#64748b' }}>Current Output</div>
                  <div style={{ fontWeight: 'bold', color: isAlert ? '#dc2626' : '#16a34a' }}>{a.current} units</div>
                </div>
                <div>
                  <div style={{ color: '#64748b' }}>Deviation</div>
                  <div style={{ fontWeight: 'bold', color: isAlert ? '#dc2626' : '#16a34a' }}>
                    {deviation > 0 ? '+' : ''}{deviation}%
                  </div>
                </div>
              </div>

              {isAlert && (
                <div style={{
                  marginTop: '10px', padding: '8px', background: '#fee2e2',
                  borderRadius: '6px', fontSize: '12px', color: '#991b1b'
                }}>
                  ⚠ Alert sent to District Officer — {a.district}. Production is {deviation}% above baseline. Flagged for field inspection.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Anomaly;