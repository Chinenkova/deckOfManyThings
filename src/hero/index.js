import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as _ from 'underscore';

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCard: null,
      wholeDeckNumbersArray: _.shuffle([...Array(54).keys()].map(i => i + 1)),
      cardFlipped: false,
    };
  }

  tryAgain() {
    this.setState({
      chosenCard: null,
      cardFlipped: false
    })
  }

  flipCard() {
    this.setState({ cardFlipped: true });
  }

  chooseCard(el) {
    this.setState({ chosenCard: el })
  }

  render() {
    const { wholeDeckNumbersArray, cardFlipped, chosenCard } = this.state;
    return (
      <div className="hero-wrapper">
        <button className="go-back">
          <Link to="/">Go back</Link>
        </button>
        {this.state.chosenCard ?
          (<>
          <button className="choose-btn" onClick={this.tryAgain.bind(this)}>Try again</button>
          <div className="chosen-card">
            <div onClick={this.flipCard.bind(this)} className={`card ${cardFlipped ? 'is-flipped' : ''}`}>
              <img className="card__face card__face--back" src={`/public/images/shirt.png`} />
              <img className="card__face card__face--front" src={`/public/images/wholedeck/${chosenCard}.png`} />
            </div>
          </div>
          </>)
          :
          <div className="hero-deck">
            {wholeDeckNumbersArray.map((el, key) =>
              <img className="hero-deck_card" onClick={() => this.chooseCard(el)} alt='' style={{ left: 30 * key + 'px' }} key={key} src={`/public/images/shirt.png`} />)}
          </div>
        }
      </div>
    );
  }
}
