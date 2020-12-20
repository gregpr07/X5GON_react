import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DisplayWidth } from "./Components";
import ScrollToTop from "./ScrollToTop";

import Search from "./Search";
import Homepage from "./Homepage";
import Products from "./Products";
import Team from "./Team";
import Privacy from "./Privacy";
import Feed from "./products/Feed";
import Discovery from "./products/Discovery";
import Analytics from "./products/Analytics";
import Translate from "./products/Translate";
import Recommend from "./products/Recommend";
import Connect from "./products/Connect";
import Join from "./Join";
import Policy from "./Policy";
import Transparency from "./Transparency";
import Blind from "./products/Blind";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          {/* <DisplayWidth /> */}
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact component={Products} />
          <Route path="/search" exact component={Search} />
          <Route path="/team" exact component={Team} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/Policy" exact component={Policy} />
          <Route path="/join" exact component={Join} />
          <Route path="/transparency" exact component={Transparency} />
          {/* PRODUCTS */}
          <Route path="/products" exact>
            <Route path="/products/feed" exact component={Feed} />
            <Route path="/products/discovery" exact component={Discovery} />
            <Route path="/products/blind" exact component={Blind} />
            <Route path="/products/recommend" exact component={Recommend} />
            <Route path="/products/translate" exact component={Translate} />
            <Route path="/products/analytics" exact component={Analytics} />
            <Route path="/products/connect" exact component={Connect} />
          </Route>
          {/* /PRODUCTS */}

          {/* <Footer /> */}
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
