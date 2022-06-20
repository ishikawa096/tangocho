import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { isEmptyObject, validateCard } from '../helpers/helpers';
import { error } from '../helpers/notifications';
import CardNotFound from './CardNotFound';
import { CardType } from './Types';

const InputField = styled(Input)({
  fontSize: 40,
  width: '100%',
});

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
    const errors = validateCard(card);
    if (!isEmptyObject(errors)) {
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
              <InputField type='text' id='word' name='word' className='cardInput' onChange={handleInputChange} value={card.word} placeholder='単語を入力してEnterで保存' />
            </label>
          </div>
          <div className='CardFormItem'>
            <label htmlFor='answer'>
              <strong>Answer:</strong>
              <InputField type='text' id='answer' name='answer' className='cardInput' onChange={handleInputChange} value={card.answer} />
            </label>
          </div>
          <input type='hidden' id='book_id' name='book_id' />
        </div>
        <div className='form-actions'>
          <Button type='submit' variant="contained" color="primary">Enter</Button>
        </div>
      </form>
    </section>
  );
};

export default CardForm;
