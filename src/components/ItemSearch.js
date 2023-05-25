import React from 'react';
import '../SharedStyles.css';

const ItemSearch = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card bg-secondary text-white mb-3 shadow-lg item-card">
        <div className="card-body text-center">
          <h5 className="card-title">Item Search</h5>
          <p className="card-text">
            Explore a vast database of magical and mundane items for your game.
          </p>
          <a href="#" className="btn btn-light btn-lg item-button">Search Now</a>
        </div>
      </div>
    </div>
  );
};

export default ItemSearch;
