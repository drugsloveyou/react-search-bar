import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import SearchBar from './modules/SearchBar';
import SearcgResultView from './modules/SearchResultView';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <SearcgResultView />
    </div>
  );
}

export default App;
