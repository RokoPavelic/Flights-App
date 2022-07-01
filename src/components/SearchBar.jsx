import { useEffect } from "react";

export default function SearchBar({ setTerm, term, setSearched, searched }) {
  const url = `https://api.skypicker.com/locations?term=${term}`;

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setSearched(data);
  }

  return (
    <>
      <input
        type="search"
        className="search-bar"
        onChange={(e) => {
          setTerm(e.target.value.toLowerCase());
        }}
      />
      <button onClick={() => fetchData(url)} className="button-search">
        Search
      </button>
    </>
  );
}
