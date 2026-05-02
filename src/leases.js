const leases = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { id: "TG-001", mineral: "Granite", leaseholder: "Ravi Minerals Pvt Ltd", district: "Nalgonda", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.26, 17.05], [79.31, 17.05], [79.31, 17.10], [79.26, 17.10], [79.26, 17.05]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-002", mineral: "Limestone", leaseholder: "Sri Balaji Mines", district: "Karimnagar", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.12, 18.43], [79.18, 18.43], [79.18, 18.49], [79.12, 18.49], [79.12, 18.43]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-003", mineral: "Coal", leaseholder: "Deccan Coal Ltd", district: "Adilabad", status: "Inactive" },
      geometry: { type: "Polygon", coordinates: [[[78.52, 19.65], [78.58, 19.65], [78.58, 19.71], [78.52, 19.71], [78.52, 19.65]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-004", mineral: "Quartz", leaseholder: "Telangana Quartz Co", district: "Mahbubnagar", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[77.98, 16.73], [78.04, 16.73], [78.04, 16.79], [77.98, 16.79], [77.98, 16.73]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-005", mineral: "Feldspar", leaseholder: "Hyderabad Minerals", district: "Rangareddy", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.18, 17.21], [78.24, 17.21], [78.24, 17.27], [78.18, 17.27], [78.18, 17.21]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-006", mineral: "Iron Ore", leaseholder: "Khammam Iron Works", district: "Khammam", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[80.12, 17.42], [80.18, 17.42], [80.18, 17.48], [80.12, 17.48], [80.12, 17.42]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-007", mineral: "Bauxite", leaseholder: "Warangal Bauxite Ltd", district: "Warangal", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.55, 17.95], [79.61, 17.95], [79.61, 18.01], [79.55, 18.01], [79.55, 17.95]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-008", mineral: "Mica", leaseholder: "Nalgonda Mica Corp", district: "Nalgonda", status: "Inactive" },
      geometry: { type: "Polygon", coordinates: [[[79.40, 16.85], [79.46, 16.85], [79.46, 16.91], [79.40, 16.91], [79.40, 16.85]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-009", mineral: "Dolomite", leaseholder: "Nizamabad Dolomite Co", district: "Nizamabad", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.08, 18.65], [78.14, 18.65], [78.14, 18.71], [78.08, 18.71], [78.08, 18.65]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-010", mineral: "Manganese", leaseholder: "Adilabad Manganese Pvt Ltd", district: "Adilabad", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.20, 19.55], [78.26, 19.55], [78.26, 19.61], [78.20, 19.61], [78.20, 19.55]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-011", mineral: "Granite", leaseholder: "Medak Stone Works", district: "Medak", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.25, 17.95], [78.31, 17.95], [78.31, 18.01], [78.25, 18.01], [78.25, 17.95]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-012", mineral: "Limestone", leaseholder: "Suryapet Lime Industries", district: "Suryapet", status: "Inactive" },
      geometry: { type: "Polygon", coordinates: [[[79.60, 17.12], [79.66, 17.12], [79.66, 17.18], [79.60, 17.18], [79.60, 17.12]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-013", mineral: "Coal", leaseholder: "Mancherial Coal Ltd", district: "Mancherial", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.42, 18.85], [79.48, 18.85], [79.48, 18.91], [79.42, 18.91], [79.42, 18.85]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-014", mineral: "Silica Sand", leaseholder: "Bhadradri Silica Co", district: "Bhadradri Kothagudem", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[80.58, 17.52], [80.64, 17.52], [80.64, 17.58], [80.58, 17.58], [80.58, 17.52]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-015", mineral: "Feldspar", leaseholder: "Siddipet Minerals", district: "Siddipet", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.85, 18.08], [78.91, 18.08], [78.91, 18.14], [78.85, 18.14], [78.85, 18.08]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-016", mineral: "Granite", leaseholder: "Wanaparthy Granite Pvt Ltd", district: "Wanaparthy", status: "Inactive" },
      geometry: { type: "Polygon", coordinates: [[[78.05, 16.35], [78.11, 16.35], [78.11, 16.41], [78.05, 16.41], [78.05, 16.35]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-017", mineral: "Iron Ore", leaseholder: "Jayashankar Iron Corp", district: "Jayashankar Bhupalpally", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.92, 18.42], [79.98, 18.42], [79.98, 18.48], [79.92, 18.48], [79.92, 18.42]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-018", mineral: "Quartz", leaseholder: "Nagarkurnool Quartz Ltd", district: "Nagarkurnool", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.32, 16.48], [78.38, 16.48], [78.38, 16.54], [78.32, 16.54], [78.32, 16.48]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-019", mineral: "Bauxite", leaseholder: "Mulugu Bauxite Industries", district: "Mulugu", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[80.02, 18.18], [80.08, 18.18], [80.08, 18.24], [80.02, 18.24], [80.02, 18.18]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-020", mineral: "Dolomite", leaseholder: "Vikarabad Dolomite Co", district: "Vikarabad", status: "Inactive" },
      geometry: { type: "Polygon", coordinates: [[[77.88, 17.32], [77.94, 17.32], [77.94, 17.38], [77.88, 17.38], [77.88, 17.32]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-021", mineral: "Mica", leaseholder: "Kamareddy Mica Corp", district: "Kamareddy", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[78.32, 18.28], [78.38, 18.28], [78.38, 18.34], [78.32, 18.34], [78.32, 18.28]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-022", mineral: "Limestone", leaseholder: "Yadadri Lime Works", district: "Yadadri Bhuvanagiri", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.02, 17.52], [79.08, 17.52], [79.08, 17.58], [79.02, 17.58], [79.02, 17.52]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-023", mineral: "Manganese", leaseholder: "Peddapalli Manganese Ltd", district: "Peddapalli", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.35, 18.60], [79.41, 18.60], [79.41, 18.66], [79.35, 18.66], [79.35, 18.60]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-024", mineral: "Silica Sand", leaseholder: "Jogulamba Silica Co", district: "Jogulamba Gadwal", status: "Inactive" },
      geometry: { type: "Polygon", coordinates: [[[77.82, 16.22], [77.88, 16.22], [77.88, 16.28], [77.82, 16.28], [77.82, 16.22]]] }
    },
    {
      type: "Feature",
      properties: { id: "TG-025", mineral: "Coal", leaseholder: "Kumuram Bheem Coal Ltd", district: "Kumuram Bheem Asifabad", status: "Active" },
      geometry: { type: "Polygon", coordinates: [[[79.48, 19.42], [79.54, 19.42], [79.54, 19.48], [79.48, 19.48], [79.48, 19.42]]] }
    },
  ]
};

export default leases;