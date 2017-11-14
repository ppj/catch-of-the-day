// let's go!

import React from "react";
import "./css/style.css"
import { render } from "react-dom";
import { BrowserRouter, Match } from 'react-router';

import App from "./components/App"
import StorePicker from "./components/StorePicker"

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
