import React from 'react';
import '../SharedStyles.css';

const InitiativeTracker = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card bg-info text-white mb-3 shadow-lg initiative-card">
        <div className="card-body text-center">
          <h5 className="card-title">Initiative Tracker</h5>
          <p className="card-text">
            Keep track of turn order and combat statistics during intense battles.
          </p>
          <a href="#" className="btn btn-light btn-lg initiative-button">Track Now</a>
        </div>
      </div>
    </div>
  );
};

export default InitiativeTracker;
