import React from 'react';
import { useParams } from 'react-router-dom';
import { CardType } from './Types';

const Card = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find((c: CardType) => c.id === Number(id));

  return (
    <div className="cardContainer">
      <h2>
        {card.id}
        {'-'}
        {card.word}
      </h2>
      <ul>
        <li>
          ID: {card.id}
        </li>
        <li>
          Word: {card.word}
        </li>
      </ul>
    </div>
  );
};

export default Card;
