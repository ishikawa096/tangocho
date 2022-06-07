import React from 'react';

const CardForm = () => {
  const handleSubmit = (c: { preventDefault: () => void; }) => {
    c.preventDefault();
    console.log('Submitted');
  };

  return (
    <section>
      <h2>New Card</h2>
      <form className="CardForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card_word">
            <strong>Word:</strong>
            <input type="text" id="card_word" name="card_word" />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
};

export default CardForm;
