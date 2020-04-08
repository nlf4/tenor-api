import React, { Component } from "react";
import axios from "axios";
import Form from "./components/Form";
import Results from "./components/Results";
// import Loading from "./components/Loading";
import Suggestions from "./components/Suggestions";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: [],
        searchData: []
      }
    };
  }
  getGifs = query => {
    this.setState({
      gifs: {
        ...this.state.gifs,
        loading: true
      }
    });
    axios
      .get(
        `https://api.tenor.com/v1/search?q=${query}&key=SB8SEBOC0V92&limit=20`
        // `https://api.tenor.com/v1/registershare?id=8776030&key=SB8SEBOC0V92&q=excited`
      )
      .then(results => {
        console.log(results.data.results);
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: results.data.results,
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getSearchSuggestions = query => {
    this.setState({
    gifs: {
      ...this.state.gifs,
      loading: true
    }
  });
  axios
    .get(
        `https://api.tenor.com/v1/search_suggestions?key=SB8SEBOC0V92&q=${query}&limit=10`
      // `https://api.tenor.com/v1/search?q=${query}&key=SB8SEBOC0V92&limit=14`
      // `https://api.tenor.com/v1/registershare?id=8776030&key=SB8SEBOC0V92&q=excited`
    )
    .then(results => {
      console.log(results.data.results);
      this.setState({
        gifs: {
          ...this.state.gifs,
          searchData: results.data.results,
          loading: false
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
};



  render() {
    return (
      <div className="App" id="app-div">
        <div id="header-div">
          <h1 id="search-header">Gif Search</h1>
          <Form getGifs={this.getGifs} getSearchSuggestions={this.getSearchSuggestions}/>
        </div>
        <div id="suggestions-div">
          <Suggestions getGifs={this.getGifs} data={this.state.gifs.searchData} />
        </div>
        <div id="results-div">
          <Results data={this.state.gifs.data} />
        </div>
      
      </div>
    );
  }
}
