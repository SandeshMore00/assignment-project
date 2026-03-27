// import React, { useState } from "react";

// function App() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);


//   const handleSearch = async (value) => {
//     setQuery(value);


//     if (!value) { 
//       setResults([]);
//       return;
//     }

//     setLoading(true);

//     try{
//       const response = await fetch(
//         `http://localhost:9000/api/search?q=${value}`
//       );
//       const data = await response.json();

//       if (Array.isArray(data)) {
//         setResults(data);
//       } else {
//         setResults([]);
//       }

//       setResults(data);

//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResults([]);
//     }

//     setLoading(false);
//   };

//   console.log("RESULTS:", results);

//   return (
//       <div style={{ padding: "20px" }}>
//         <h2>Company Search</h2>

//         <input
//           type="text"
//           value={query}
//           onChange={(e) => handleSearch(e.target.value)}
//           placeholder="Search companies..."
//         />

//         {loading && <p>Loading...</p>}

//         {!loading && query && results.length === 0 && (
//           <p>No results found</p>
//         )}

//         <ul>
//           {results.map((company) => (
//             <li key={company.id}>{company.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
// }

// export default App;



import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // Prevent empty search
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:9000/api/search?query=${query}`
      );

      const data = await response.json();

      // Ensure only array is set
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        setResults([]);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Company Search</h2>

      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search companies..."
      />

      {/* Search Button */}
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* No Results */}
      {!loading && query && results.length === 0 && (
        <p>No results found</p>
      )}

      {/* Results */}
      <ul>
        {results.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;