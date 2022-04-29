//React
import { useEffect, useState } from "react";

export const useSearchBox = () => {
  //Local State
  const [showSuggestions, toggleShowSuggestions] = useState(false);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [potentialUsers, setPotentialUsers] = useState([]);

  //Data Fetching
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
    setPotentialUsers([name]);
    toggleShowSuggestions(false);
  };

  const filterForPotentialUsers = (userQuery) => {
    const regex = new RegExp(userQuery.toLowerCase());
    return users.filter((user) => regex.test(user.toLowerCase()));
  };

  const handleUserQuery = (userQuery) => {
    userQuery.length === 0
      ? toggleShowSuggestions(false)
      : toggleShowSuggestions(true);
    setQuery(userQuery);
    const usersThatMatchQuery = filterForPotentialUsers(userQuery);
    setPotentialUsers(usersThatMatchQuery);
  };

  return {
    toggleShowSuggestions,
    showSuggestions,
    query,
    potentialUsers,
    setTextInSearchBar,
    handleUserQuery,
  };
};
