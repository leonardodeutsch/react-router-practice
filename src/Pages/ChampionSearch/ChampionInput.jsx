import React from 'react';

const ChampionInput = ({termSearched, setTermSearched}) => {
  const handleInput = (e) => {
    setTermSearched(e.target.value);
  }

  return (
    <form className="champion-search" >
      <input type="text" onChange={handleInput} value={termSearched} placeholder="Search for a champion"/>
    </form>
  );
}
 
export default ChampionInput;