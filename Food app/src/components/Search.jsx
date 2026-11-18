import {useState} from 'react'
import {useEffect} from 'react'
import styles from "./Search.module.css";

function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch"  
  const API_KEY = "c2a424e9eb2a4d01ae622178b1ff2ab0" 
  const [query , setQuery] = useState('')
  
 useEffect(() => {
  async function fetchData() {
    if (!query.trim()) return;

    const response = await fetch(
      `${URL}?apiKey=${API_KEY}&query=${query}`
    );

    const data = await response.json();

    setFoodData(data.results);
  }

  fetchData();

}, [query]);

 return (
  <div className={styles.searchContainer}>
  <input
    type="text"
    placeholder="Search for recipes... 🍕"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
</div>
);
}

export default Search