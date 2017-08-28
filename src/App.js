import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }

  componentDidMount () {
    const url = 'https://stark-wildwood-70301.herokuapp.com/articles'

    fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('Parsed json', json)
      }).catch(function (ex) {
        console.log('Parsing json failed', ex)
      })
  }
}

export default App
