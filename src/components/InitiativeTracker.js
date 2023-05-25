import React, { useState } from 'react';
import _ from 'lodash';
import '../SharedStyles.css';

const InitiativeTracker = () => {
  const [combatants, setCombatants] = useState([]);
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState('');

  const addCombatant = (e) => {
    e.preventDefault();

    const newCombatant = {
      id: _.uniqueId(), 
      name: name, 
      initiative: parseInt(initiative)
    };

    setCombatants([...combatants, newCombatant].sort((a,b) => b.initiative - a.initiative));
    setName('');
    setInitiative('');
  };

  const removeCombatant = (id) => {
    setCombatants(combatants.filter(combatant => combatant.id !== id));
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card bg-info text-white mb-3 shadow-lg initiative-card">
        <div className="card-body text-center">
          <h5 className="card-title">Initiative Tracker</h5>
          <form onSubmit={addCombatant}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={initiative} onChange={(e) => setInitiative(e.target.value)} placeholder="Initiative" required />
            <button type="submit" className="btn btn-light btn-lg initiative-button">Add Combatant</button>
          </form>
          <div className="mt-4 bg-dark text-white p-4 rounded">
            {combatants.map(combatant => (
              <div key={combatant.id}>
                <p>{combatant.name} - {combatant.initiative}</p>
                <button onClick={() => removeCombatant(combatant.id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeTracker;
