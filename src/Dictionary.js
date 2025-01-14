import React, { useState } from 'react';
import './App.css'; // Optional CSS for styling

const Dictionary = () => {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // State for the input value
  const [result, setResult] = useState(null); // State for the search result

  // Function to handle the search
  const handleSearch = () => {
    // Search for the word in the dictionary (case-insensitive)
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    // Update the result based on the search
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="app-container">
      <h1>Dictionary App</h1>

      <div className="search-bar">
        {/* Input field for search term */}
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Search button */}
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display the result */}
      <h5>Defintion:</h5>
      {result && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
