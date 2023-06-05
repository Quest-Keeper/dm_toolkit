import React, { useState } from 'react';
import '../SharedStyles.css';

const monsterTypes = ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
const difficulties = ["Easy", "Medium", "Hard", "Deadly"];

const EncounterBuilder = () => {
  const [partySize, setPartySize] = useState(4);
  const [playerCR, setPlayerCR] = useState(1);
  const [difficulty, setDifficulty] = useState('Easy');
  const [monsterType, setMonsterType] = useState("");
  const [monsters, setMonsters] = useState([]);

  const difficultyMultiplier = {
    'Easy': 0.5,
    'Medium': 1.0,
    'Hard': 1.5,
    'Deadly': 2.0
  };

  const convertCRToNumber = (cr) => {
    if (cr.includes("/")) {
      const [numerator, denominator] = cr.split("/");
      return numerator / denominator;
    }
    return parseFloat(cr);
  };
  
  const randomizeMonster = (monsters) => {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    return monsters[randomIndex];
  }

  const fetchMonsters = async () => {
    const totalPartyCR = partySize * playerCR * difficultyMultiplier[difficulty];
    const response = await fetch(`http://localhost:3001/api/v1/monsters?type=${monsterType}&challenge_rating=${totalPartyCR}`);
    const data = await response.json();
  
    let appropriateMonsters = data.results.filter(monster => convertCRToNumber(monster.challenge_rating) <= totalPartyCR);

    const selectedMonster = randomizeMonster(appropriateMonsters);
    const monsterCR = convertCRToNumber(selectedMonster.challenge_rating);
    const amount = Math.floor(totalPartyCR / monsterCR);
 
    setMonsters([{ ...selectedMonster, amount }]);
  };

  const displayMonsters = () => {
    return monsters.map((monster, index) => (
      <div key={index}>
        <h5>{monster.name} x{monster.amount}</h5>
        <p>Type: {monster.type}</p>
        <p>Challenge Rating: {monster.challenge_rating}</p>
      </div>
    ));
  };  

  return (
    <div className="col-md-6 mt-4 offset-md-3">
      <div className="card bg-dark text-white mb-4 shadow-lg">
        <div className="card-body text-center">
          <h4 className="card-title mb-4">Encounter Builder</h4>
          <p className="card-text mb-4">
            Assemble fearsome monsters and challenging encounters for your players.
          </p>
          <div className="row">
            <div className="form-group col-md-3">
              <label htmlFor="partySize" className="form-label">Party Size</label>
              <input className="form-control form-control-lg" id="partySize" type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} required/>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="playerCR" className="form-label">Player CR</label>
              <input className="form-control form-control-lg" id="playerCR" type="number" value={playerCR} onChange={(e) => setPlayerCR(e.target.value)} required/>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="difficulty" className="form-label">Difficulty</label>
              <select className="form-control form-control-lg" id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                <option value="">Select Difficulty</option>
                {difficulties.map((difficulty, index) => <option key={index} value={difficulty}>{difficulty}</option>)}
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="monsterType" className="form-label">Monster Type</label>
              <select className="form-control form-control-lg" id="monsterType" value={monsterType} onChange={e => setMonsterType(e.target.value)}>
                <option value="">Select Type</option>
                {monsterTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
              </select>
            </div>
          </div>
          <button className="btn btn-light btn-lg mt-2" onClick={fetchMonsters}>Build Now</button>
          <div className="mt-4 bg-dark text-white p-4 rounded">
            {displayMonsters()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncounterBuilder;