import React, { Component } from "react";
import AppContext from './AppContext';
import nytAPI from '../utils/axios';
import { Redirect } from "react-router-dom";

class AppProvider extends Component {
  state = {
    realTime: [],
    trendings: [],
    trendingsByEmail:[],
    searchResult: []
  }

  async componentDidMount() {
    try {
      const news = await nytAPI.get('/')
      return this.setState({
        realTime: news.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  apiCall = async (api, query="") => {
    try {
      let key = {
        "realTime": "/",
        "trendings": "/trendings",
        "trendingsByEmail":"/trendings-by-email",
        "searchResult":`/search-result?q=${query}`
      }
      
      const news = await nytAPI.get(key[`${api}`])
      console.log(this.state);
      return this.setState({
        [`${api}`]: news.data
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  handleSearch = (event) => {
    event.preventDefault()
    let query = event.target.querySelector('[name=q]').value
    console.log(query);
    // window.history.pushState({},null,`/search-result?q=${query}`)
    this.apiCall('searchResult', `${query}`)
  }

  render() {
    const contextValues = {
      state: this.state,
      apiCall: this.apiCall,
      handleSearch: this.handleSearch
    }
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


export default AppProvider;