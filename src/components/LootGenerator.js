import React, { useState } from 'react';
import axios from 'axios';
import '../SharedStyles.css';

const LootGenerator = () => {
  const [amount, setAmount] = useState(1);
  const [type, setType] = useState('magic');
  const [rarity, setRarity] = useState('common');
  const [loot, setLoot] = useState(null);

  const generateLoot = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/loot', {
        params: { amount, type, rarity },
      });
      setLoot(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card bg-dark text-white mb-3 shadow-lg loot-card">
        <div className="card-body text-center">
          <h5 className="card-title">Loot Generator</h5>
          <p className="card-text">
            Discover valuable treasures and magical items to reward your adventurers.
          </p>

          <div className="row">
            <div className="col-md-4 mb-3">
              <select className="form-select" onChange={(e) => setAmount(e.target.value)}>
                {[...Array(20)].map((_, i) => <option value={i + 1} key={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <select className="form-select" onChange={(e) => setType(e.target.value)}>
                <option value="magic">Magic</option>
                <option value="non-magic">Non-Magic</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <select className="form-select" onChange={(e) => setRarity(e.target.value)}>
                <option value="common">Common</option>
                <option value="uncommon">Uncommon</option>
                <option value="rare">Rare</option>
                <option value="very rare">Very Rare</option>
                <option value="legendary">Legendary</option>
                <option value="artifact">Artifact</option>
              </select>
            </div>
          </div>
          <button onClick={generateLoot} className="btn btn-light btn-lg loot-btn mb-3">Generate Now</button>
          {loot && loot.map((item, index) => (
            <div key={index} className="card bg-light text-dark mb-3 p-3">
              <h2 className="card-title">{item.name}</h2>
              {item.description && <p><strong>Description:</strong> {item.description}</p>}
              {item.level && <p><strong>Level:</strong> {item.level}</p>}
              {item.uses && <p><strong>Uses:</strong> {item.uses}</p>}
              {item.category && <p><strong>Category:</strong> {item.category}</p>}
              {item.damage_dice && <p><strong>Damage Dice:</strong> {item.damage_dice}</p>}
              {item.damage_type && <p><strong>Damage Type:</strong> {item.damage_type}</p>}
              {item.rarity && <p><strong>Rarity:</strong> {item.rarity}</p>}
              {item.ac && <p><strong>AC:</strong> {item.ac}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LootGenerator;