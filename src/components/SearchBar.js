import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui left aligned category search">
        <form className="ui icon input container">
          <input
            className="prompt"
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <i className="search icon"></i>
        </form>
      </div>
    );
  }
}

export default SearchBar;