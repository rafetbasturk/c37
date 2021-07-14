import Header from "./components/Header";
import Home from "./page/Home";
import DetailPage from "./page/DetailPage";
import DetailCode from "./page/DetailCode";
import Error from "./components/Error";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(true)

  return (
    <Router>
      <div className={mode ? "container light" : "container"}>
        <Header mode={() => setMode(!mode)} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/detail/:name" children={<DetailPage />} >
          </Route>

          <Route path="/code/:code" children={<DetailCode />} >
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
