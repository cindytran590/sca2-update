import React, { Component } from "react"
import "./App.css"

const WinMessage = () => <div>You Win!</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomValue: Math.floor(Math.random() * 100),
      guess: -1,
      win: false
    }
  }

  updateGuess = event => {
    this.setState({ guess: event.target.value })
  }

  checkWin = event => {
    event.preventDefault()
    // TODO: check if guess equal to randomValue and update this.state.win
  }

  render() {
    return (
      <div className="App">
        <div>Current value: {this.state.randomValue}</div>
        <form>
          <label>
            Enter a guess:
            <input
              type="number"
              value={this.state.value}
              onChange={this.updateGuess}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.checkWin} />
        </form>
        {this.state.win && <WinMessage />}
      </div>
    )
  }
}

export default App
