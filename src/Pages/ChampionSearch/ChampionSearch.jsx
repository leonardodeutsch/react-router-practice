import React, { useState, useEffect } from 'react';
import './ChampionSearch.css';

import ChampionInput from './ChampionInput.jsx';
import ChampionCard from './ChampionCard.jsx';
import ChampionsData from './champions.js';

const ChampionSearch = () => {
  const [termSearched, setTermSearched] = useState('');
  const [filteredChampions, setFilteredChampions] = useState([]);

  useEffect(() => {
    setFilteredChampions(ChampionsData.filter(champion => champion.name.toLowerCase().includes(termSearched.toLowerCase())));
  }, [termSearched]);

  return (
    <div>
      <h2>Champion Search</h2>
      <ChampionInput termSearched={termSearched} setTermSearched={setTermSearched}/>
      <div className="champion-list">
        {filteredChampions.map(champion=> (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>

    </div>
  );
}
 
export default ChampionSearch;