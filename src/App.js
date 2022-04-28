import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const SearchBox = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [potentialUsers, setPotentialUsers] = useState([]);

    useEffect(() => {
      const users = [];
      fetch("https://randomuser.me/api/?results=15&inc=name,dob&nat=GB")
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((person) => {
            const name = `${person.name.first} ${person.name.last}`;
            users.push(name);
          });
        });
      setUsers(users);
    }, []);

    const setTextInSearchBar = (name) => {
      setQuery(name);
      setPotentialUsers([name])
      setShowSuggestions(false);
    };

    const filterForPotentialUsers = (userQuery) => {
      const regex = new RegExp(userQuery.toLowerCase())
      return users.filter((user) => regex.test(user.toLowerCase()));
  };

    const handleUserQuery = (userQuery) => {
      userQuery.length === 0 ? setShowSuggestions(false) : setShowSuggestions(true);
      setQuery(userQuery)
      const usersThatMatchQuery = filterForPotentialUsers(userQuery)
      setPotentialUsers(usersThatMatchQuery)
    }

    return (
      <div>
        <input
          placeholder="Type to search for user"
          onClick={() => setShowSuggestions(!showSuggestions)}
          onChange={(event) => handleUserQuery(event.target.value)}
          value={query}
        />
        {showSuggestions && (
          <div>
            {potentialUsers.map((name, index) => {
              return (
                <div key={index} onClick={() => setTextInSearchBar(name)}>
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>User Directory</h1>
      <SearchBox />
    </div>
  );
}

export default App;
