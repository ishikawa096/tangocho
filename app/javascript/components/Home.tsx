import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import CardList from './CardList';
import Card from './Card';
import CardForm from './CardForm';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/cards');
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="grid">
        {isError && <p>Something went wrong. Check the console.</p>}

        {isLoading ? (<p>Loading...</p>) : (
          <>
            <CardList cards={cards} />
            <Routes>
              <Route path="cards/new" element={<CardForm />} />
              <Route path="cards/:id" element={<Card cards={cards} />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
