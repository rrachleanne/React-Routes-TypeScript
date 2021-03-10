import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import Sidebar from "./components/layout/Sidebar";
import PropViewer from "./components/props/PropViewer";
import PageNotFound from "./components/PageNotFound";
import TextSwatch from './components/text/TextSwitch'
import SmartTextSwatch from "./components/text/SmartTextSwatch";
import People from "./components/profiles/People";
import PersonProfileContainer from "./components/profiles/PersonProfileContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Sidebar />
          <div>
            <Switch>
            <Route path="/" exact component={Home} />
   
            <Route path="/props" exact component={PropViewer} />
            <Route path="/text/:text" exact component={SmartTextSwatch} />

            <Route path="/people/:id" exact component={PersonProfileContainer} />
            <Route path="/people" exact component={People} />

            <Route path="/Text" exact render={() => {
              return <TextSwatch text='red'/>
            }} />



            <Route component={PageNotFound} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
