import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CardType, CardListType } from './Types';
import CardNotFound from './CardNotFound';

type Props = {
  cards: CardListType;
  onDelete: (cardId: number) => void;
}

const Card: React.FC<Props> = ({ cards, onDelete }) => {
  const { id } = useParams();
  const card = cards.find((c: CardType) => c.id === Number(id));

  if (!card) return <CardNotFound />;

  return (
    <div className='cardContainer'>
      <h2>
        {card.word}
        {'-'}
        {card.answer}
        <Link to={`/cards/${card.id}/edit`}>Edit</Link>
        <button className='delete' type='button' onClick={() => onDelete(card.id)}>
          Delete
        </button>
      </h2>
      <ul>
        <li>word: {card.word}</li>
        <li>answer: {card.answer}</li>
      </ul>
    </div>
  );
};

export default Card;
