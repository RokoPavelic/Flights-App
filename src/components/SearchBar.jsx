import{useEffect} from 'react';


export default function SearchBar({setTerm, term}) {
 
    
    const url = `https://api.skypicker.com/locations?type=top_destinations&term=${term}`;
  
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data)

  
      
    }
  
    useEffect(() => {
      term && fetchData();
    }, []);
// console.log(term)
console.log(url)
   return (
    <input type="search"className="search-bar" onChange={(e) => setTerm(e.target.value.toLowerCase())} />
    
   )


    
}


