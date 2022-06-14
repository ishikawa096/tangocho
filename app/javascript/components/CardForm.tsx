import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { isEmptyObject, validateCard } from '../helpers/helpers';
import CardNotFound from './CardNotFound';

const CardForm = ({ cards, onSave }) => {
  // const [card, setCard] = useState({
  //   word: '', answer: '', status: '', book_id: 1,
  // });
  const { id } = useParams();
  const defaults = {
    word: '',
    answer: '',
    status: '',
    book_id: 1,
  };
  const currCard = id ? cards.find((c) => c.id === Number(id)) : {};
  const initialCardState = { ...defaults, ...currCard };
  const [card, setCard] = useState(initialCardState);
  const [formErrors, setFormErrors] = useState<{ any: string } | {}>({});

  useEffect(() => {
    setCard(initialCardState);
  }, [cards]);

  const handleInputChange = (c: { target: any }) => {
    const { target } = c;
    const { name } = target;
    const value = target.value;
    setCard({ ...card, [name]: value });
  };

  const renderErrors = () => {
    if (isEmptyObject(formErrors)) {
      return null;
    } else {
      return (
        <div className='errors'>
          <h3>エラー！</h3>
          <ul>
            {Object.values(formErrors).map((formError, index) => (
              <li key={index}>{formError}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const handleSubmit = (c: { preventDefault: () => void }) => {
    c.preventDefault();
    const errors = validateCard(card);
    if (!isEmptyObject(errors)) {
      setFormErrors(errors);
    } else {
      onSave(card);
      setCard(initialCardState);
    }
  };

  if (id && !card.id) return <CardNotFound />;

  return (
    <section>
      {renderErrors()}
      <form className='CardForm' onSubmit={handleSubmit} name='CardForm'>
        <div className='CardFormInner'>
          <div className='CardFormItem'>
            <label htmlFor='word'>
              <strong>Word:</strong>
              <input type='text' id='word' name='word' onChange={handleInputChange} value={card.word} />
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
          <button type='submit'>Save</button>
        </div>
      </form>
    </section>
  );
};

type CardFormType = {
  onSave: Function;
};

export default CardForm;
