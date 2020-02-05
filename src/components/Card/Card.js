import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ id, name, image, status, species, gender }) => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={image} alt={`foto do ${name}`} title={name} />

          <div className="card__image__presentation">
            <h2>{name}</h2>
          </div>

        </div>

        <div className="card__body">

          <div className="card__body">
            {status}
          </div>
          <div className="card__body">
            {species}
          </div>
          <div className="card__body">
            {gender}
          </div>

        </div>
      </div>
    </>
  );
};

Card.propTypes = {};

export default Card;
