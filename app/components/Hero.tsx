"use client";
import NextImage from "next/image";
import React, { useEffect, useState } from "react";

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Hero = () => {
  const [chosenCard, setChosenCard] = useState<number | null>(null);
  const [oldDeckNumbersArray, setOldDeckNumbersArray] = useState<number[] | []>(
    []
  );
  const [cardFlipped, setCardFlipped] = useState(false);

  useEffect(() => {
    const numbers = Array.from({ length: 22 }, (_, i) => i + 1);
    setOldDeckNumbersArray(shuffleArray(numbers));
  }, []);

  const tryAgain = () => {
    setChosenCard(null);
    setCardFlipped(false);
    setOldDeckNumbersArray(shuffleArray(oldDeckNumbersArray));
  };

  const rotateDegree = (key: number) => {
    return (
      "rotate(calc(" +
      (45 - (90 * key) / (oldDeckNumbersArray.length - 1)) +
      "deg))"
    );
  };

  const bottomCard = (key: number) => {
    if (key === 0 || key === oldDeckNumbersArray.length) {
      return "calc(0px)";
    }
    return (
      "calc(" +
      -Math.cos(
        -Math.PI / 2 + (key * Math.PI) / (oldDeckNumbersArray.length - 1)
      ) *
        200 +
      "px)"
    );
  };

  return (
    <>
      <img alt='candle' className="candle-first" src={`/images/candle.png`} />
      <img alt='candle' className="candle-second" src={`/images/candle.png`} />
      {chosenCard ? (
        <>
          <button className="choose-btn" onClick={tryAgain}>
            Draw again
          </button>
          <div className="chosen-card">
            <div
              onClick={() => setCardFlipped(!cardFlipped)}
              className={`card ${cardFlipped ? "is-flipped" : ""}`}
            >
              <NextImage
                width={400}
                height={560}
                alt="card"
                className="card__face card__face--back"
                src={`/images/shirt.png`}
              />
              <NextImage
                width={400}
                height={560}
                alt="card"
                className="card__face card__face--front"
                src={`/images/${chosenCard}.png`}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="hero-deck">
          <div className="deck">
            {oldDeckNumbersArray.map((el, key) => (
              <div
                onClick={() => setChosenCard(el)}
                style={{
                  left: "calc(50px + " + 75 * key + "px)",
                  transform: rotateDegree(key),
                  bottom: bottomCard(key),
                }}
                key={key}
                className="card-wrapper"
              >
                <div className="overlay"></div>
                <NextImage
                  width={170}
                  height={300}
                  alt="card"
                  className="cardd"
                  src={`/images/shirt.png`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
