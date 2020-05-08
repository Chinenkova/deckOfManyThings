import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Deck } from '../deck';
import * as _ from 'underscore';

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCard: null,
      oldDeckNumbersArray: _.shuffle([...Array(14).keys()].map(i => i + 1)),
      cardFlipped: false,
    };
  }

  tryAgain() {
    this.setState({
      chosenCard: null,
      cardFlipped: false,
      oldDeckNumbersArray: _.shuffle([...Array(14).keys()].map(i => i + 1)),
    })
  }

  flipCard() {
    this.setState({ cardFlipped: true });
  }

  chooseCard(el) {
    this.setState({ chosenCard: el })
  }

  render() {
    const { oldDeckNumbersArray, cardFlipped, chosenCard } = this.state;
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
              <img className="card__face card__face--front" src={`/public/images/older/${chosenCard}.png`} />
            </div>
          </div>
          </>)
          :
          <div className="hero-deck">
            <Deck oldOnly={true} oldDeck={oldDeckNumbersArray} chooseCard={this.chooseCard.bind(this)} />
          </div>
        }
      </div>
    );
  }
}
