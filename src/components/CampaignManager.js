import React from 'react';
import '../SharedStyles.css';

const CampaignManager = () => {
  return (
    <div className="col-md-6">
      <div className="card bg-warning text-white mb-3 shadow-lg campaign-card">
        <div className="card-body text-center">
          <h5 className="card-title">Campaign Manager</h5>
          <p className="card-text">
            Organize your campaigns, sessions, and notes in one convenient place.
          </p>
          <a href="#" className="btn btn-light btn-lg campaign-button">Manage Now</a>
        </div>
      </div>
    </div>
  );
};

export default CampaignManager;
