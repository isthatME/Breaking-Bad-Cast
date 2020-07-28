import React, {useState, useEffect}from 'react';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Seach from './components/ui/Seach'
import axios from 'axios'
import './App.css';

const App = () => {
  const URL = 'https://www.breakingbadapi.com/api'
  
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${URL}/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <Seach getQuery={(query) => setQuery(query)}/>
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
