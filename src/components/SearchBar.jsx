import{useEffect} from 'react';


export default function SearchBar({setTerm, term, setSearched, searched}) {
 
    
    const url = `https://api.skypicker.com/locations?radius_from=250&term=${term}&limit=20`;
  
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      
    }
  
    useEffect(() => {
      term && fetchData(url);
    }, [searched]);
// console.log(term)
console.log(searched)
   return (
    <>
    <input 
      type="search"
      className="search-bar" 
      onChange={(e) => { 
        setTerm(e.target.value.toLowerCase());
        
        
    }} />
    <button onClick={()=>setSearched(term)} className="button-search">Search</button>
  </>
    
   )


    
}


