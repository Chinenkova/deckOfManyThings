import React, { Component } from 'react';
import { Card } from '../card';
import { Deck } from '../deck';
import { Link } from "react-router-dom";
import * as _ from 'underscore';

export class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainDeck: [],
      olderDeck: [],
      deckNumbersArray: _.shuffle([...Array(40).keys()].map(i => i + 1)),
      oldDeckNumbersArray: _.shuffle([...Array(14).keys()].map(i => i + 1)),
      showBig: false
    };
  }

  tryAgain() {
    this.setState({
      mainDeck: [],
      olderDeck: [],
      deckNumbersArray: _.shuffle([...Array(40).keys()].map(i => i + 1)),
      oldDeckNumbersArray: _.shuffle([...Array(14).keys()].map(i => i + 1))
    })
  }

  chooseCard(el, old) {
    if (old && this.state.olderDeck.length < 2) {
      const { olderDeck, oldDeckNumbersArray } = this.state;
      olderDeck.push(el);
      this.setState({ 
        oldDeckNumbersArray: _.without(oldDeckNumbersArray, el),
      })
      this.setState({ olderDeck: olderDeck })
    } else if (!old && this.state.mainDeck.length < 3) {
      const { mainDeck, deckNumbersArray } = this.state;
      mainDeck.push(el);
      this.setState({ deckNumbersArray: _.without(deckNumbersArray, el) })
      this.setState({ mainDeck: mainDeck })
    }
  }

  toggleBig(element) {
    this.setState({showBig: !this.state.showBig})
    this.setState({bigCard: element})
  }

  render() {
    const { olderDeck, mainDeck, deckNumbersArray, oldDeckNumbersArray, showBig, bigCard } = this.state;
    return (
      <div>
        {showBig && <div className="veil"></div>}
        <button className="go-back">
          <Link to="/">Go back</Link>
        </button>
        {(olderDeck.length === 2 && mainDeck.length === 3) ?
          (<div className="scene">
            <button className="choose-btn" onClick={this.tryAgain.bind(this)}>Try again</button>
            <Card toggleBig={this.toggleBig.bind(this)} showBig={showBig && mainDeck[0] === bigCard} index={mainDeck[0]} />
            <div className="center-line">
              <Card toggleBig={this.toggleBig.bind(this)} showBig={showBig && mainDeck[1] === bigCard} index={mainDeck[1]} />
              <Card toggleBig={this.toggleBig.bind(this)} showBig={showBig && olderDeck[0] === bigCard} old={true} index={olderDeck[0]} />
              <Card toggleBig={this.toggleBig.bind(this)} showBig={showBig && mainDeck[2] === bigCard} index={mainDeck[2]} />
            </div>
            <Card toggleBig={this.toggleBig.bind(this)} showBig={showBig && olderDeck[1] === bigCard} old={true} index={olderDeck[1]} />
          </div>)
          :
          <Deck oldOnly={false} deck={deckNumbersArray} oldDeck={oldDeckNumbersArray} chooseCard={this.chooseCard.bind(this)} />
        }
      </div>
    );
  }
}
