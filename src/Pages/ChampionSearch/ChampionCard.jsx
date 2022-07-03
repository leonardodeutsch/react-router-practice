import React from 'react';

const ChampionCard = ({champion}) => {

  return (
    <div className="champion-card">
      <a href={`https://www.leagueoflegends.com/en-us/champions/${champion.name.toLowerCase()}/`} target="_blank" rel="noreferrer">
        <img src={champion.image.sprite} alt={`${champion.id} sprite`} />
      </a>
      <div className="champion-name">{champion.name}</div>
    </div>
  );
}
 
export default ChampionCard;