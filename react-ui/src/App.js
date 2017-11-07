import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' }
];

function MovieList(props) {
  const movies = props.movies;
  const listItems = movies.map((movie) => 
    <li>{movie.title}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movielist</h1>
        </header>
        <p className="App-intro">
          To get started, edit Guisak John Pricehoun and save to reload.
        </p>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
