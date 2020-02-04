import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import AppProvider from './context/AppProvider';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component={()=><NewsCard path="realTime" />} />
          <Route exact path='/trendings' component={()=><NewsCard path="trendings" />} />
          <Route exact path='/trendings-by-email' component={()=><NewsCard path="trendingsByEmail" />} />
          <Route path='/search-result' component={()=><NewsCard path="searchResult" />} />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
