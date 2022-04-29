import React from "react";
//Hooks
import { useSearchBox } from "./useSearchBox";
//Components
import UserSuggestion from "../UserSuggestion/UserSuggestion";
//Styles
import { StyledSearchBox } from "./styles";

const SearchBox = () => {
  const {
    toggleShowSuggestions,
    setTextInSearchBar,
    showSuggestions,
    handleUserQuery,
    query,
    potentialUsers,
  } = useSearchBox();

  return (
    <StyledSearchBox>
      <input
        placeholder="Type to search for a user"
        onClick={() => toggleShowSuggestions(!showSuggestions)}
        onChange={(event) => handleUserQuery(event.target.value)}
        value={query}
      />
      {showSuggestions && (
        <div className="dropdown">
          {potentialUsers.map((name, index) => {
            return (
              <UserSuggestion
                key={index}
                name={name}
                setTextInSearchBar={setTextInSearchBar}
              />
            );
          })}
        </div>
      )}
    </StyledSearchBox>
  );
};

export default SearchBox;
