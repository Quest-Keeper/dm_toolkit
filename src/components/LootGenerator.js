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

          <select onChange={(e) => setAmount(e.target.value)}>
            {[...Array(20)].map((_, i) => <option value={i + 1} key={i + 1}>{i + 1}</option>)}
          </select>
          
          <select onChange={(e) => setType(e.target.value)}>
            <option value="magic">Magic</option>
            <option value="non-magic">Non-Magic</option>
            <option value="mixed">Mixed</option>
          </select>

          <select onChange={(e) => setRarity(e.target.value)}>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="very rare">Very Rare</option>
            <option value="legendary">Legendary</option>
            <option value="artifact">Artifact</option>
          </select>

          <button onClick={generateLoot} className="btn btn-light btn-lg loot-btn">Generate Now</button>
          {loot && loot.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
              {item.description && <p>Description: {item.description}</p>}
              {item.level && <p>Level: {item.level}</p>}
              {item.uses && <p>Uses: {item.uses}</p>}
              {item.category && <p>Category: {item.category}</p>}
              {item.damage_dice && <p>Damage Dice: {item.damage_dice}</p>}
              {item.damage_type && <p>Damage Type: {item.damage_type}</p>}
              {item.rarity && <p>Rarity: {item.rarity}</p>}
              {item.ac && <p>AC: {item.ac}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LootGenerator;