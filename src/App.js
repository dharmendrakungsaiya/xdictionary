import {useState} from "react";
import './App.css';


const initialDictionary = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]


function App() {

  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const wordEntry = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (wordEntry) {
      setResult(wordEntry.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" placeholder="Search for a word..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button type="submit" onClick={handleSearch}>Search</button>
      <p><strong>Definition:</strong></p>
      <p>{result}</p>
    </div>
  );
}

export default App;
