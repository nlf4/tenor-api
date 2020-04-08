import React from "react";
import '../style.css'

export default class props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: {
        value: "",
        error: false
      }
    };
  }
  handleField = e => {
    if (e.target.value !== "") {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          value: e.target.value,
          error: false
        }
      });
    } else {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: true
        }
      });
    }
  };
  render() {
    return (
      <form onSubmit={e => {e.preventDefault(); this.props.getSearchSuggestions(this.state.searchStr.value); this.props.getGifs(this.state.searchStr.value);}}>
        <input 
          type="text"
          id="search-field"
          placeholder=""
          className={this.state.error ? "error" : ""}
          value={this.state.searchStr.value}
          onChange={this.handleField}
        />
        <input id="search-btn" type="submit" value="Go" />
      </form>
    );
  }
}