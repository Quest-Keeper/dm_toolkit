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
    <div className="container text-center">
      <Header />
      <div className="row mt-5">
        <CharacterGenerator />
        <EncounterBuilder /> 
        <LootGenerator />
        <InitiativeTracker />
        <CampaignManager />
        <ItemSearch />
      </div>
      <Footer />
    </div>
  );
};

export default App;