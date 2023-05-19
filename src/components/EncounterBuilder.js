import React, { useState } from 'react';

const EncounterBuilder = () => {
  const [monsterType, setMonsterType] = useState("");
  const [challengeRating, setChallengeRating] = useState("");
  const [monsters, setMonsters] = useState([]);

  const fetchMonsters = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/monsters?type=${monsterType}&challenge_rating=${challengeRating}`);
    const data = await response.json();
    console.log(data);
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
            <input
              className="form-control"
              placeholder="Monster Type"
              value={monsterType}
              onChange={e => setMonsterType(e.target.value)}
            />
            <input
              className="form-control mt-2"
              placeholder="Challenge Rating"
              value={challengeRating}
              onChange={e => setChallengeRating(e.target.value)}
            />
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