//Components
import Header from "./Components/Header/Header";
import SearchBox from "./Components/SearchBox/Searchbox";
//Styles
import { StyledApp } from "./styles";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <SearchBox />
    </StyledApp>
  );
};

export default App;
