import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PersonTable.css';

const PersonTable = () => {
  const [persons, setPersons] = useState([]);
  const [personsShort, setPersonsShort] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=25')
    .then(res => {
      setPersons(res.data.results);
    })
  }, []);

  useEffect(() => {
    setPersonsShort(persons.map(person => extractPersonData(person)));
  }, [persons]);

  const extractPersonData = (person) => {
    const fullName = Object.values(person.name).reduce((fullName, word, index) => {
      if (index === 0) return '';
      return `${fullName} ${word}`
    }, '');
    const email = person.email;
    return {fullName, email};
  }

  const idGenerator = () => {
    return Math.floor(Math.random() * 10000);
  }

  const sortNames = (personsShort) => {
    
  }

  return (
    <div className="person-table-app">
      <h2>Persons Table</h2>
      {personsShort?.length > 0 && 
        <table className="person-table">
          <thead>
            <tr>
              {Object.keys(personsShort[0]).map(header => (
                <td key={idGenerator()} style={{fontWeight: 600}}>{header}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {personsShort.map(person => (
              <tr key={idGenerator()}>
                {Object.values(person).map(personDetails => (
                  <td key={idGenerator()}>{personDetails}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
 
export default PersonTable;