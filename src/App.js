import React, { Component } from "react";
import  { Switch, Route, Redirect } from "react-router-dom";
// import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import "./default.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
