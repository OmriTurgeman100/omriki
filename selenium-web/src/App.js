import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";


const App = () => {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
        </switch>
      </div>
    </Router>
  );
};

export default App;
