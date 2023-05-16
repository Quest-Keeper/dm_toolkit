import React from 'react';
import Header from './components/Header';
import CharacterGenerator from './components/CharacterGenerator';
import EncounterBuilder from './components/EncounterBuilder';
import LootGenerator from './components/LootGenerator';
import InitiativeTracker from './components/InitiativeTracker';

const App = () => {
  return (
    <div className="container text-center">
      <Header />
      <div className="row mt-5">
        <CharacterGenerator />
        <EncounterBuilder /> 
        <LootGenerator />
        <InitiativeTracker />
      </div>
      <div className="row">
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