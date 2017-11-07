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

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <form>
        <label>
          <input type="text" name="search" placeholder="Enter a movie title"/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

function MovieList(props) {
  var movies = props.movies;
  var listItems = movies.map((movie) => 
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
          <h3><em>How may I take your order?</em></h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>Guisak John Pricehoun</code> and save to reload.
        </p>
        <Searchbar />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
