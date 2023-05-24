import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterGenerator from './components/CharacterGenerator';
import EncounterBuilder from './components/EncounterBuilder';
import LootGenerator from './components/LootGenerator';
import InitiativeTracker from './components/InitiativeTracker';
import CampaignManager from './components/CampaignManager';
import ItemSearch from './components/ItemSearch';

const App = () => {
  return (
    <div>
      <div className="container-fluid full-width">
        <Header />
      </div>
      <div className="container mt-5">
        <div className="row">
          <CharacterGenerator />
          <EncounterBuilder /> 
          <LootGenerator />
          <InitiativeTracker />
          <CampaignManager />
          <ItemSearch />
        </div>
      </div>
      <div className="container-fluid full-width">
        <Footer />
      </div>
    </div>
  );
};

export default App;
