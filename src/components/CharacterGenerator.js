import React from 'react';

const CharacterGenerator = () => {
  return (
    <div className="col-md-4">
      <div className="card bg-primary text-white mb-3">
        <div className="card-body">
          <h5 className="card-title">Character Generator</h5>
          <p className="card-text">
            Generate brave heroes and cunning villains for your quests.
          </p>
          <a href="#" className="btn btn-light btn-lg">Generate Now</a>
        </div>
      </div>
    </div>
  );
};

export default CharacterGenerator;