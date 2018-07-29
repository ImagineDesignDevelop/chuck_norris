import React, { Component } from 'react';
import axios from 'axios'
import image from './chuck_norris.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: ''
    }
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    const th = this;
      axios.get('https://api.icndb.com/jokes/random')
        .then(function(event) {    
          th.setState({
            joke: JSON.stringify(event.data.value.joke)
          });
        })
  }

  next() {
    const next = this
      axios.get('https://api.icndb.com/jokes/random')
        .then(function(event) {    
          next.setState({
            joke: JSON.stringify(event.data.value.joke)
          });
        })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-8">
              <img className="cn_image" src={image} alt="Chuck Norris" />
              <p className="joke">{this.state.joke}</p>
              <button className="btn btn-primary btn-lg" onClick={this.next}>Next Joke</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
