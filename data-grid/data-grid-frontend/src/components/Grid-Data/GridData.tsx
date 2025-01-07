import './GridData.scss';

export const GridData: React.FC = () => {
  return (
    <>
      <div className="grid-data-parent-div">
        <div style={{ height: '10vh' }}>
          <h2>Data Grid</h2>
        </div>
        <div className="grid-data-header">
          <div className="primary-header">
            <div>
              <span
                style={{
                  color: 'rgb(24 133 9)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                }}
              >
                Primary View
              </span>
            </div>
            <div className="primary-header-divider"></div>
            <div className="dropdown-container">
              <select name="grid-" id="dropdown-select">
                <option value="location">Location</option>
                <option value="branch">Branch</option>
              </select>
            </div>
          </div>
          <div className="secondary-header">
            <div>Contacts Excluded</div>
            <div className="filter-div">Filters Applied</div>
          </div>
        </div>
        <div className="table-container">
          <table className="data-grid-table">
            <thead>
              <tr className="table-header-row">
                <th>Location</th>
                <th>Potential Revenue</th>
                <th>Competitior Processing Volume</th>
                <th>Competitor Merchant</th>
                <th>Revenue / Account</th>
                <th>Market Share</th>
                <th>Commercial DDA's</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};
