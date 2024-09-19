import Image from "next/image";
import React, { Component, useState } from "react";

type Props = {
  toggleBig: (index: number) => void;
  index: number;
  old: boolean;
  showBig: boolean;
};

const Card = ({ toggleBig, index, old, showBig }: Props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`card ${flipped && "is-flipped"}`}
    >
      <Image
        alt="card"
        width={20}
        height={40}
        className="card__face card__face--back"
        src={`/public/images/shirt.png`}
      />
      {old ? (
        <Image
          width={20}
          height={40}
          alt="card"
          onClick={() => toggleBig(index)}
          className={`card__face card__face--front ${showBig ? "big" : ""}`}
          src={`/public/images/older/${index}.png`}
        />
      ) : (
        <Image
          width={20}
          height={40}
          alt="card"
          onClick={() => toggleBig(index)}
          className={`card__face card__face--front ${showBig ? "big" : ""}`}
          src={`/public/images/${index}.png`}
        />
      )}
    </div>
  );
};

export default Card;
