/*import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav";
import Navigate from "./pages/Navigate";
function App() {
  return (
    <>
      <Header />
      <Navigate/>
      <SimpleBottomNavigation />
    </>


  );
}
export default App;*/
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav";
import Trending from './pages/Trending';
import Movies from './pages/movies';
import Series from './pages/Series';
import Search from './pages/Search';
import { Container } from "@material-ui/core";
function App() {
  return (
    <BrowserRouter>
      <Header /> <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>);
} export default App;