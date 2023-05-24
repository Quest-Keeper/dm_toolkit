import React, { useState } from 'react';

// Define the possible monster types and challenge ratings
const monsterTypes = ["Dragon", "Beast", "Humanoid", "Fiend", "Undead"];
const challengeRatings = ["0", "0.5", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "30"];

const EncounterBuilder = () => {
  const [monsterType, setMonsterType] = useState("");
  const [challengeRating, setChallengeRating] = useState("");
  const [monsters, setMonsters] = useState([]);

  const fetchMonsters = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/monsters?type=${monsterType}&challenge_rating=${challengeRating}`);
    const data = await response.json();
    setMonsters(data.results);
  };

  const displayMonsters = () => {
    return monsters.map((monster, index) => (
      <div key={index}>
        <h5>{monster.name}</h5>
        <p>Type: {monster.type}</p>
        <p>Challenge Rating: {monster.challenge_rating}</p>
      </div>
    ));
  };

  return (
    <div className="col-md-6 mt-4">
      <div className="card bg-danger text-white mb-4">
        <div className="card-body">
          <h4 className="card-title mb-4">Encounter Builder</h4>
          <p className="card-text mb-4">
            Assemble fearsome monsters and challenging encounters for your players.
          </p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select className="form-control form-control-lg" value={monsterType} onChange={e => setMonsterType(e.target.value)}>
                <option value="">Monster Type</option>
                {monsterTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
              </select>
            </div>
            <div className="form-group col-md-6">
              <select className="form-control form-control-lg" value={challengeRating} onChange={e => setChallengeRating(e.target.value)}>
                <option value="">Challenge Rating</option>
                {challengeRatings.map((rating, index) => <option key={index} value={rating}>{rating}</option>)}
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
