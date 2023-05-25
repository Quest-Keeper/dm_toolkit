import React from 'react';
import '../SharedStyles.css';

const LootGenerator = () => {
  return (
    <div className="col-md-4">
      <div className="card bg-success text-white mb-3 shadow-lg loot-card">
        <div className="card-body text-center">
          <h5 className="card-title">Loot Generator</h5>
          <p className="card-text">
            Discover valuable treasures and magical items to reward your adventurers.
          </p>
          <a href="#" className="btn btn-light btn-lg loot-btn">Generate Now</a>
        </div>
      </div>
    </div>
  );
};

export default LootGenerator;
