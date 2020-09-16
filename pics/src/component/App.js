/** @format */

import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/seacrh/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID O1WtKxRn05kIMf1YbIyya03wZhtcq7D6t7kU4Pq70OI",
      },
    });
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
