import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterGenerator from './components/CharacterGenerator';
import EncounterBuilder from './components/EncounterBuilder';
import LootGenerator from './components/LootGenerator';
import InitiativeTracker from './components/InitiativeTracker';
import CampaignManager from './components/CampaignManager';
import ItemSearch from './components/ItemSearch';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="custom-container mt-5">
        <div className="row">
          <div className="col-md-12 mb-5">
            <CharacterGenerator />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <EncounterBuilder />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <LootGenerator />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <InitiativeTracker />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <CampaignManager />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <ItemSearch />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
