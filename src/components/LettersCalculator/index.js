// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    return (
      <div className="lc-bg">
        <img
          className="lc-img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="lc-container">
          <h1 className="lc-main-heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="searchText" className="lc-search-header">
              Enter the phrase
            </label>
            <input
              className="lc-input-search"
              type="text"
              id="searchText"
              placeholder="Enter the phrase"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <p className="lc-letter-count">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
