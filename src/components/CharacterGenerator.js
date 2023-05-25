import React, { useState } from 'react';
import '../SharedStyles.css';

const CharacterGenerator = () => {
  const [race, setRace] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [character, setCharacter] = useState(null);

  const races = ["Human", "Elf", "Dwarf", "Orc"];
  const genders = ["Male", "Female"];
  const ages = ["Young", "Middle-aged", "Old"];

  const generateCharacter = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ race, gender, age })
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/characters', requestOptions);
      const data = await response.json();
      setCharacter(data.data.attributes);      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="col-md-6 mt-4 shared-component">
      <div className="card bg-primary text-white mb-4 shadow-lg">
        <div className="card-body text-center">
          <h4 className="card-title mb-4">Character Generator</h4>
          <p className="card-text mb-4">
            Generate brave heroes and cunning villains for your quests.
          </p>
          <div className="form-row">
            <div className="form-group col-md-4">
              <select className="form-control form-control-lg" value={race} onChange={e => setRace(e.target.value)}>
                <option value="">Race</option>
                {races.map((r, index) => <option key={index} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="form-group col-md-4">
              <select className="form-control form-control-lg" value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">Gender</option>
                {genders.map((g, index) => <option key={index} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="form-group col-md-4">
              <select className="form-control form-control-lg" value={age} onChange={e => setAge(e.target.value)}>
                <option value="">Age</option>
                {ages.map((a, index) => <option key={index} value={a}>{a}</option>)}
              </select>
            </div>
          </div>
          <button className="btn btn-light btn-lg mt-2" onClick={generateCharacter}>Generate Now</button>
          {character && <div className="mt-4 bg-dark text-white p-4 rounded">
            <h5>Generated Character:</h5>
            <p><strong>Race:</strong> {character.race}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Age:</strong> {character.age}</p>
            <p><strong>Name:</strong> {character.name}</p>
            <p><strong>Description:</strong> {character.description}</p>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default CharacterGenerator;
