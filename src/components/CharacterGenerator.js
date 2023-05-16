import React, { useState } from 'react';

const CharacterGenerator = () => {
  const [race, setRace] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [character, setCharacter] = useState(null);

  const races = ["Human", "Elf", "Dwarf", "Orc"];
  const genders = ["Male", "Female"];
  const ages = ["Young", "Middle-aged", "Old"];

  const generateCharacter = () => {
    const name = "Random Name"; // Replace with a function to generate a random name
    const description = "Random Description"; // Replace with a function to generate a random description

    setCharacter({ race, gender, age, name, description });
  };

  return (
    <div className="col-md-4">
      <div className="card bg-primary text-white mb-3">
        <div className="card-body">
          <h5 className="card-title">Character Generator</h5>
          <p className="card-text">
            Generate brave heroes and cunning villains for your quests.
          </p>
          <div className="form-group">
            <select className="form-control" value={race} onChange={e => setRace(e.target.value)}>
              <option value="">Select Race</option>
              {races.map((r, index) => <option key={index} value={r}>{r}</option>)}
            </select>
            <select className="form-control mt-2" value={gender} onChange={e => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              {genders.map((g, index) => <option key={index} value={g}>{g}</option>)}
            </select>
            <select className="form-control mt-2" value={age} onChange={e => setAge(e.target.value)}>
              <option value="">Select Age</option>
              {ages.map((a, index) => <option key={index} value={a}>{a}</option>)}
            </select>
            <button className="btn btn-light btn-lg mt-2" onClick={generateCharacter}>Generate Now</button>
          </div>
          {character && <div className="mt-3 bg-dark text-white p-3 rounded">
            <h6>Generated Character:</h6>
            <p>Race: {character.race}</p>
            <p>Gender: {character.gender}</p>
            <p>Age: {character.age}</p>
            <p>Name: {character.name}</p>
            <p>Description: {character.description}</p>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default CharacterGenerator;