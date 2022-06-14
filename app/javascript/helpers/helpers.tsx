import { error } from './notifications';

export const isEmptyObject = (obj: {} | { any: string; }) => Object.keys(obj).length === 0;

export const validateCard = (card: { word: string, answer: string }) => {
  const errors: any = {};
  if (card.word === '') {
    errors.word = 'wordを入力してください';
  }
  if (card.answer === '') {
    errors.answer = 'answerを入力してください';
  }
  if (!Object.values(errors)) {
    return errors;
  } else {
    return errors;
  }
};

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.error(err);
};
