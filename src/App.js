import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterGenerator from './components/CharacterGenerator';
import EncounterBuilder from './components/EncounterBuilder';
import LootGenerator from './components/LootGenerator';
import InitiativeTracker from './components/InitiativeTracker';
import CampaignManager from './components/CampaignManager';
import ItemSearch from './components/ItemSearch';
import './App.css'; // Import the custom CSS file

const App = () => {
  return (
    <div className="app">
      <div className="container-fluid">
        <Header />
      </div>
      <div className=" mt-5"> {/* Apply the custom container class */}
        <div className="row">
          <div className="col-md-4 mb-5">
            <CharacterGenerator />
          </div>
          <div className="col-md-4 mb-5">
            <EncounterBuilder />
          </div>
          <div className="col-md-4 mb-5">
            <LootGenerator />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-5">
            <InitiativeTracker />
          </div>
          <div className="col-md-4 mb-5">
            <CampaignManager />
          </div>
          <div className="col-md-4 mb-5">
            <ItemSearch />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
};

export default App;

