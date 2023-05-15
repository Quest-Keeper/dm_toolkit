import React from 'react';

const App = () => {
  return (
    <div className="container">
      <header className="text-center mt-5">
        <h1>Welcome to My D&D App</h1>
        <p className="lead">This is a React app using Bootstrap</p>
      </header>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Character Generator</h5>
              <p className="card-text">
                Generate random characters for your D&D campaign.
              </p>
              <a href="#" className="btn btn-primary">Generate</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Encounter Builder</h5>
              <p className="card-text">
                Build custom encounters with monsters and NPCs.
              </p>
              <a href="#" className="btn btn-primary">Build</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center mt-5">
        <p>&copy; 2023 My D&D App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;