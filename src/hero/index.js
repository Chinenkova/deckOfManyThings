import React, { Component } from 'react';
import * as _ from 'underscore';

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCard: null,
      oldDeckNumbersArray: _.shuffle([...Array(22).keys()].map(i => i + 1)),
      cardFlipped: false,
    };
  }

  tryAgain() {
    this.setState({
      chosenCard: null,
      cardFlipped: false,
      oldDeckNumbersArray: _.shuffle([...Array(22).keys()].map(i => i + 1)),
    })
  }

  flipCard() {
    this.setState({ cardFlipped: true });
  }

  chooseCard(el) {
    this.setState({ chosenCard: el })
  }

  rotateDegree(key) {
    return 'rotate(calc(' + (45-90*key/(this.state.oldDeckNumbersArray.length-1)) + 'deg))'
  }

  bottomCard(key) {
    if(key === 0 || key === this.state.oldDeckNumbersArray.length) {
      return 'calc(0px)';
    }
    return 'calc(' + -Math.cos(-Math.PI/2+key*Math.PI/(this.state.oldDeckNumbersArray.length-1))*200 + 'px)';
  }

  render() {
    const { oldDeckNumbersArray, cardFlipped, chosenCard } = this.state;
    return (
      <>
        <img className="candle-first" src={`/public/images/candle.png`}/>
        <img className="candle-second" src={`/public/images/candle.png`}/>
        {this.state.chosenCard ?
          (<>
            <button className="choose-btn" onClick={this.tryAgain.bind(this)}>Draw again</button>
            <div className="chosen-card">
              <div onClick={this.flipCard.bind(this)} className={`card ${cardFlipped ? 'is-flipped' : ''}`}>
                <img className="card__face card__face--back" src={`/public/images/shirt.png`} />
                <img className="card__face card__face--front" src={`/public/images/${chosenCard}.png`} />
              </div>
            </div>
          </>)
          :
          <div className="hero-deck">
            <div className="deck">
              {oldDeckNumbersArray.map((el, key) => 
              <div  onClick={() => this.chooseCard(el, false)} alt='' style={{ left: 'calc(50px + ' + 75 * key + 'px)', transform: this.rotateDegree(key), bottom: this.bottomCard(key)}} key={key} className="card-wrapper">
                <div className="overlay"></div>
                <img className="cardd" src={`/public/images/shirt.png`} />
                </div>)
              }
            </div>
          </div>
        }
      </>
    );
  }
}
