import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

class Navbar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          return (

            <nav>
              <form >
                <label>search</label>
                <input name='q'></input>
                {/* <button type='submit'> GO</button> */}
                <Link to="/search-result" onClick={context.handleSearch}>Go</Link>
              </form>
              <img id='logo' src='./nytimes-logo.png' />
              <div className='links'>
                <Link to='/'>HOME |</Link>
                <Link to='/trendings-by-email'>TRENDING BY EMAIL |</Link>
                <Link to='/trendings'>TRENDING</Link>
              </div>
            </nav>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Navbar;