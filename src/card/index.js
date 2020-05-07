import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  flipCard() {
    this.setState({ flipped: true })
  }

  render() {
    return (
      <div onClick={this.flipCard.bind(this)} className={`card ${this.state.flipped ? 'is-flipped' : ''}`}>
        <img className="card__face card__face--back" src={`/public/images/shirt.png`} />
        {this.props.old ? 
        <img className="card__face card__face--front" src={`/public/images/older/${this.props.index}.png`} /> : 
        <img className="card__face card__face--front" src={`/public/images/${this.props.index}.png`} />}
      </div>
    );
  }
}