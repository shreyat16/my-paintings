import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PaintList from "./PaintList";
import Details from "./Details";

class Routes extends Component {
  render() {
    const getPaint = props => {
      let name = props.match.params.name;
      let currentPaint = this.props.paintings.find(
        painting => painting.name.toLowerCase() === name.toLowerCase()
      );
      return <Details {...props} painting={currentPaint} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/paintings'
          render={() => <PaintList paintings={this.props.paintings} />}
        />
        <Route exact path='/paintings/:name' render={getPaint} />
        <Redirect to='/paintings' />
      </Switch>
    );
  }
}
export default Routes;
