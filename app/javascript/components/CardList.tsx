import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { CardType, CardListType } from "./Types";

const CardList = ({ cards }) => {
  const renderCards = (cardArray: CardListType) => {
    cardArray.sort((a: CardType, b: CardType) => b.id - a.id);
    return cardArray.map((card: CardType) => (
      <li key={card.id}>
        <NavLink to={`/cards/${card.id}`}>
          {card.id}
          {' - '}
          {card.word}
        </NavLink>
      </li>
    ));
  };
  return (
    <section className="cardList">
      <h2>
        Cards
        <Link to="/cards/new">New Card</Link>
      </h2>
      <ul>{renderCards(cards)}</ul>
    </section>
  );
};

export default CardList;
