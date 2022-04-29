import React from "react";
//Styles
import {StyledUserSuggestion} from "./styles"

const UserSuggestion = ({ name, setTextInSearchBar }) => {
  return (
    <StyledUserSuggestion onClick={() => setTextInSearchBar(name)}>
      {name}
    </StyledUserSuggestion>
  );
};

export default UserSuggestion;
