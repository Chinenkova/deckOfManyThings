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

  openBig() {
    this.props.toggleBig(this.props.index)
  } 


  render() {
    return (
      <div onClick={this.flipCard.bind(this)} className={`card ${this.state.flipped && 'is-flipped'}`}>
        <img className="card__face card__face--back" src={`/public/images/shirt.png`} />
        {this.props.old ? 
        <img onClick={this.openBig.bind(this)} className={`card__face card__face--front ${this.props.showBig ? 'big' : ''}`} src={`/public/images/older/${this.props.index}.png`} /> : 
        <img onClick={this.openBig.bind(this)} className={`card__face card__face--front ${this.props.showBig ? 'big' : ''}`} src={`/public/images/${this.props.index}.png`} />}
      </div>
    );
  }
}