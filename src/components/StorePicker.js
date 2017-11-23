import React from "react";

import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  goToStore() {
    console.log("You changed the URL dude!")
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ this.goToStore }>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()} />
        <button type="submit">Visit 🚘</button>
      </form>
    )
  }
}

export default StorePicker;
