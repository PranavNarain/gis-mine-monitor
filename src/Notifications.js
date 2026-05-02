const alerts = [
  { id: 1, type: 'ANOMALY', time: 'Today 09:12 AM', message: 'Mine TG-001 (Nalgonda) — Production 212% above baseline. Alert sent to District Officer.', color: '#dc2626', bg: '#fef2f2', icon: '⚠' },
  { id: 2, type: 'ANOMALY', time: 'Today 08:45 AM', message: 'Mine TG-017 (Jayashankar Bhupalpally) — Production 137% above baseline. Flagged for field inspection.', color: '#dc2626', bg: '#fef2f2', icon: '⚠' },
  { id: 3, type: 'EXPIRY', time: 'Today 09:00 AM', message: 'Mine TG-001 (Nalgonda) lease expiring in 18 days. Renewal alert sent to District Officer.', color: '#d97706', bg: '#fffbeb', icon: '📅' },
  { id: 4, type: 'EXPIRY', time: 'Today 09:00 AM', message: 'Mine TG-008 (Nalgonda) lease expiring in 26 days. Renewal notice sent to leaseholder.', color: '#d97706', bg: '#fffbeb', icon: '📅' },
  { id: 5, type: 'ANOMALY', time: 'Yesterday 04:45 PM', message: 'Mine TG-004 (Mahbubnagar) — Production 256% above baseline. Flagged for field inspection.', color: '#dc2626', bg: '#fef2f2', icon: '⚠' },
  { id: 6, type: 'ANOMALY', time: 'Yesterday 02:10 PM', message: 'Mine TG-013 (Mancherial) — Production 140% above baseline. Alert sent to District Officer.', color: '#dc2626', bg: '#fef2f2', icon: '⚠' },
  { id: 7, type: 'EXPIRY', time: 'Yesterday 09:00 AM', message: 'Mine TG-003 (Adilabad) lease expiring in 33 days. Renewal notice sent to leaseholder.', color: '#d97706', bg: '#fffbeb', icon: '📅' },
  { id: 8, type: 'INFO', time: '01 May 11:00 AM', message: 'Mine TG-002 (Karimnagar) production returned to normal levels. Alert cleared.', color: '#16a34a', bg: '#f0fdf4', icon: '✓' },
  { id: 9, type: 'INFO', time: '01 May 09:00 AM', message: 'Monthly royalty report generated for all 25 active leases. Sent to Dept. of Mines & Geology.', color: '#2563eb', bg: '#eff4ff', icon: '📋' },
  { id: 10, type: 'INFO', time: '30 Apr 02:30 PM', message: 'Mine TG-006 (Khammam) production within normal range. No action required.', color: '#16a34a', bg: '#f0fdf4', icon: '✓' },
];

function Notifications({ onClose }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: 'white', borderRadius: '12px', padding: '24px',
        width: '600px', maxHeight: '80vh', overflowY: 'auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h2 style={{ margin: 0, color: '#1e3a8a' }}>🔔 Notifications & Alerts</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }}>✕</button>
        </div>

        <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '16px' }}>
          All system alerts, anomaly flags, expiry warnings, and officer notifications in one place.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {[
            { label: 'Anomaly Alerts', count: alerts.filter(a => a.type === 'ANOMALY').length, color: '#dc2626', bg: '#fef2f2', border: '#ef4444' },
            { label: 'Expiry Warnings', count: alerts.filter(a => a.type === 'EXPIRY').length, color: '#d97706', bg: '#fffbeb', border: '#f59e0b' },
            { label: 'Info / Resolved', count: alerts.filter(a => a.type === 'INFO').length, color: '#16a34a', bg: '#f0fdf4', border: '#22c55e' },
          ].map(s => (
            <div key={s.label} style={{
              flex: 1, background: s.bg, border: `1px solid ${s.border}`,
              borderRadius: '8px', padding: '10px', textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: s.color }}>{s.count}</div>
              <div style={{ fontSize: '11px', color: '#555' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {alerts.map(a => (
          <div key={a.id} style={{
            padding: '14px', marginBottom: '10px', borderRadius: '8px',
            border: `1px solid ${a.color}30`, background: a.bg,
            display: 'flex', gap: '12px', alignItems: 'flex-start'
          }}>
            <div style={{
              fontSize: '20px', minWidth: '32px', height: '32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `${a.color}20`, borderRadius: '50%'
            }}>
              {a.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{
                  fontSize: '11px', fontWeight: 'bold', color: a.color,
                  background: `${a.color}20`, padding: '2px 8px', borderRadius: '4px'
                }}>
                  {a.type}
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>{a.time}</span>
              </div>
              <div style={{ fontSize: '13px', color: '#1e293b', lineHeight: '1.5' }}>{a.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;