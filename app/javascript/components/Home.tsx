import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import CardList from './CardList';
import CardLog from './CardLog';
import Card from './Card';
import CardForm from './CardForm';
import { handleAjaxError } from '../helpers/helpers';
import { success } from '../helpers/notifications';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/v1/cards');
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        handleAjaxError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const addCard = async (newCard: React.SetStateAction<any[]>) => {
    try {
      const response = await window.fetch('/api/v1/cards', {
        method: 'POST',
        body: JSON.stringify(newCard),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw Error(response.statusText);

      const savedCard = await response.json();
      newCard = [...cards, savedCard];
      setCards(newCard);
      success('Event Added!');

      navigate(`/cards/${savedCard.id}`);
    } catch (error) {
      handleAjaxError(error);
    }
  };

  const updateCard = async (updatedCard: { id: number; }) => {
  try {
    const response = await window.fetch(
      `/api/v1/cards/${updatedCard.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(updatedCard),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) throw Error(response.statusText);
    const newCards = cards;
    const idx = newCards.findIndex((card) => card.id === updatedCard.id);
    newCards[idx] = updatedCard;
    setCards(newCards);
    success('Card Updated!');
    navigate(`/cards/${updatedCard.id}`);
    } catch (error) {
    handleAjaxError(error);
  }
};

  const deleteCard = async (cardId: number) => {
    const sure = window.confirm('Are you sure?');
    if (sure) {
      try {
        const response = await window.fetch(`/api/v1/cards/${cardId}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw Error(response.statusText);
        success('Event Deleted!');
        navigate('/cards');
        setCards(cards.filter(card => card.id !== cardId));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="grid">
        {isLoading ? (<p>Loading...</p>) : (
          <>
            <CardForm cards={undefined} onSave={addCard} />
            <CardLog cards={cards} />
            <Routes>
              <Route path="cards/new" element={<CardForm cards={undefined} onSave={addCard} />} />
              <Route path="cards/:id" element={<Card cards={cards} onDelete={deleteCard} />} />
              <Route path="cards/:id/edit" element={<CardForm cards={cards} onSave={updateCard} />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
