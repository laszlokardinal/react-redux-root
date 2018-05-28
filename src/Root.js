import React, { Component } from "react";
import PropTypes from "prop-types";

class Root extends Component {
  static propTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired
    }).isRequired,
    component: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
  }

  render() {
    return React.createElement(this.props.component, {
      state: this.props.store.getState(),
      dispatch: this.props.store.dispatch
    });
  }
}

export default Root;
