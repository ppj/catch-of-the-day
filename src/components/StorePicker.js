import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-picker">
        <h2>Please enter a store name</h2>
        <input type="text" required placeholder="Store name" />
        <button type="submit">Visit 🏃</button>
      </form>
    )
  }
}

export default StorePicker;
