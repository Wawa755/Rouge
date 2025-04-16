import React from 'react';
import '@/sass/components/cards/_cards.scss';

const Card = ({ look }) => {
  return (
    <div className="card">
      <div className="card__details">
        <h2 className="card__title">{look.Name}</h2>
        <p className="card__description">{look.Description}</p>
        <p className="card__price">€{look.Price}</p>
      </div>
    </div>
  );
};

export default Card;
