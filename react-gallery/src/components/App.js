import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App components
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import GalleryForNav from "./GalleryForNav";
import Gallery from "./Gallery";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Nav />
      <Switch>
        {/*<Route exact path="/" component={Home} />*/}
        <Route exact path="/" render={() => <Home />} />
        <Route path="/cats" render={() => <GalleryForNav title="cats" />} />
        <Route path="/dogs" render={() => <GalleryForNav title="dogs" />} />
        <Route
          path="/computers"
          render={() => <GalleryForNav title="computers" />}
        />
        <Route path="/search/:search" render={() => <Gallery />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

/*<Switch>
            <Route path="/dogs" render={() => <Gallery title="Dogs" />} />
            <Route path="/cats" render={() => <Gallery title="Cats" />} />
            <Route
              path="/computers"
              render={() => <Gallery title="Computers" />}
            />
            <Route
              path="/:newSearch"
              render={() => <Gallery title={this.state.searchTerm} />}
            />
          </Switch>*/
