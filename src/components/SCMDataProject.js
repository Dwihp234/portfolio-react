
const menuItems = [
  'app', 'Procurement', 'Expeditors', 'SPK', 'Consumption', 'EXIM', 'RKAB', 'SILO Groups', 'Testpage'
];
const submenuItems = [
  'Historical Data', 'Last Three Years', 'Fuel', 'Non Fuel', 'Department', 'Company', 'Equipment Type'
];
const tableData = [
  { quarter: '2018Q1', pembelian: '9,100,234,032', pemakaian: '' },
  { quarter: '2018Q2', pembelian: '8,009,090,479', pemakaian: '' },
  { quarter: '2018Q3', pembelian: '10,286,109,907', pemakaian: '' },
  { quarter: '2019Q1', pembelian: '11,195,689,797', pemakaian: '' },
  { quarter: '2019Q2', pembelian: '14,073,204,834', pemakaian: '' },
  { quarter: '2019Q3', pembelian: '14,173,396,566', pemakaian: '' },
  { quarter: '2019Q4', pembelian: '23,211,667,741', pemakaian: '' },
  { quarter: '2020Q1', pembelian: '24,227,736,781', pemakaian: '' },
  { quarter: '2020Q2', pembelian: '33,336,998,952', pemakaian: '' },
  { quarter: '2020Q3', pembelian: '24,882,716,858', pemakaian: '' },
];

const SCMDataProject = () => {
  return (
    <div className="scm-data-project-container">
      <h1>SCM Analytics Platform</h1>
      <p className="scm-data-project-desc">
        Overview dengan Pembelian: Analisis Awal ini bertujuan untuk memberikan historis mengenai pola pemakaian dan pembelian barang.
      </p>
      <div className="scm-analytics-layout">
        <aside className="scm-menu">
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx} className={item === 'Consumption' ? 'active' : ''}>{item}</li>
            ))}
          </ul>
          <div className="scm-submenu">
            <span>Submenu Consumption</span>
            <ul>
              {submenuItems.map((item, idx) => (
                <li key={idx} className={item === 'Historical Data' ? 'active' : ''}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
        <main className="scm-main-content">
          <h2>Data Pemakaian & Pembelian per Quarter</h2>
          <p>Tabel berikut menampilkan ringkasan pemakaian dan pembelian per quarter.</p>
          <table className="scm-table">
            <thead>
              <tr>
                <th>Quarter</th>
                <th>Pembelian</th>
                <th>Pemakaian</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.quarter}</td>
                  <td>{row.pembelian}</td>
                  <td>{row.pemakaian}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default SCMDataProject;
