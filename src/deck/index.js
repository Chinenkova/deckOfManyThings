import React from 'react';

export function Deck(props) {
  return (
    <>
      {!props.oldOnly && <div className="deck">
        {props.deck.map((el, key) => <img className="cardd" onClick={() => props.chooseCard(el, false)} alt='' style={{ left: 30 * key + 'px' }} key={key} src={`/public/images/shirt.png`} />)
        }
      </div>}
      <div className="old-deck">
        {props.oldDeck.map((el, key) => <img className="cardd" onClick={() => props.chooseCard(el, true)} alt='' style={{ left: 30 * key + 'px' }} key={key} src={`/public/images/shirt.png`} />)
        }
      </div>
    </>
  );
}