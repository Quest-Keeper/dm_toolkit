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
    <div className="col-md-4">
      <div className="card bg-danger text-white mb-3">
        <div className="card-body">
          <h5 className="card-title">Encounter Builder</h5>
          <p className="card-text">
            Assemble fearsome monsters and challenging encounters for your players.
          </p>

          <div className="form-group">
            <select className="form-control" value={monsterType} onChange={e => setMonsterType(e.target.value)}>
              <option value="">Select Monster Type</option>
              {monsterTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            <select className="form-control mt-2" value={challengeRating} onChange={e => setChallengeRating(e.target.value)}>
              <option value="">Select Challenge Rating</option>
              {challengeRatings.map((rating, index) => (
                <option key={index} value={rating}>{rating}</option>
              ))}
            </select>
            <button className="btn btn-light btn-lg mt-2" onClick={fetchMonsters}>Build Now</button>
          </div>

          <div>
            {displayMonsters()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default EncounterBuilder;
