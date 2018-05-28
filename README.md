# react-redux-root

Simple react binding for redux.

## API

### Root

Component that renders the component prop with the
dispatch function and the actual state of the redux store.

Props:
  * **store**: redux store instance
  * **component**: component to render with `{ state, dispatch }` props

## Example

```js
import React from "react";
import ReactDOM from "react-dom";
import Root from "react-redux-root";

import configureStore from "./store/configureStore.js";
import App from "./view/App.jsx";

const store = configureStore();

ReactDOM.render(
  <Root store={store} component={App} />
  document.getElementById("react-root")
);
```
