import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { isEmptyObject, validateCard } from '../helpers/helpers';
import { error } from '../helpers/notifications';
import CardNotFound from './CardNotFound';
import { CardType } from './Types';

const CardForm = ({ cards, onSave }) => {
  const { id } = useParams();
  const defaults = {
    word: '',
    answer: '',
    status: '',
    book_id: 1,
  };
  const currCard = id ? cards.find((c: CardType) => c.id === Number(id)) : {};
  const initialCardState = { ...defaults, ...currCard };
  const [card, setCard] = useState(initialCardState);

  useEffect(() => {
    setCard(initialCardState);
  }, [cards]);

  const handleInputChange = (c: { target: HTMLInputElement }) => {
    const { target } = c;
    const { name } = target;
    const value = target.value;
    setCard({ ...card, [name]: value });
  };

  const renderErrors = (errors: { word?: string; answer?: string }) => {
    const errorMessages = Object.values(errors).join('');
    error(errorMessages);
  };

  const handleSubmit = (c: { preventDefault: () => void }) => {
    c.preventDefault();
    if (!isEmptyObject(validateCard(card))) {
      const errors = validateCard(card);
      renderErrors(errors);
    } else {
      onSave(card);
      setCard(initialCardState);
    }
  };

  if (id && !card.id) return <CardNotFound />;

  return (
    <section>
      <form className='CardForm' onSubmit={handleSubmit} name='CardForm'>
        <div className='CardFormInner'>
          <div className='CardFormItem'>
            <label htmlFor='word'>
              <strong>Word:</strong>
              <input type='text' id='word' name='word' onChange={handleInputChange} value={card.word} placeholder='単語を入力してEnter' />
            </label>
          </div>
          <div className='CardFormItem'>
            <label htmlFor='answer'>
              <strong>Answer:</strong>
              <input type='text' id='answer' name='answer' onChange={handleInputChange} value={card.answer} />
            </label>
          </div>
          <input type='hidden' id='book_id' name='book_id' />
        </div>
        <div className='form-actions'>
          <button type='submit'>Enter</button>
        </div>
      </form>
    </section>
  );
};

export default CardForm;
