import React from 'react';

const App = () => {
  return (
    <div className="container text-center">
      <header className="mt-5">
        <h1 className="display-4">Welcome to My D&D App</h1>
        <p className="lead">Unleash your imagination and embark on epic adventures!</p>
      </header>
      <div className="row mt-5">
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
        <div className="col-md-4">
          <div className="card bg-danger text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Encounter Builder</h5>
              <p className="card-text">
                Assemble fearsome monsters and challenging encounters for your players.
              </p>
              <a href="#" className="btn btn-light btn-lg">Build Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Loot Generator</h5>
              <p className="card-text">
                Discover valuable treasures and magical items to reward your adventurers.
              </p>
              <a href="#" className="btn btn-light btn-lg">Generate Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-info text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Initiative Tracker</h5>
              <p className="card-text">
                Keep track of turn order and combat statistics during intense battles.
              </p>
              <a href="#" className="btn btn-light btn-lg">Track Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-warning text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Campaign Manager</h5>
              <p className="card-text">
                Organize your campaigns, sessions, and notes in one convenient place.
              </p>
              <a href="#" className="btn btn-light btn-lg">Manage Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card bg-secondary text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Item Search</h5>
              <p className="card-text">
                Explore a vast database of magical and mundane items for your game.
              </p>
              <a href="#" className="btn btn-light btn-lg">Search Now</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5">
        <p>&copy; 2023 My D&D App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;