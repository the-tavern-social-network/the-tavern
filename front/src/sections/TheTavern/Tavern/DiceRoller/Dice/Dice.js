import React from 'react';
import PropTypes from 'prop-types';

import styles from './Dice.module.scss';
import d4 from '../../../../../assets/images/dices/d4.svg';
import d6 from '../../../../../assets/images/dices/d6.svg';
import d8 from '../../../../../assets/images/dices/d8.svg';
import d10 from '../../../../../assets/images/dices/d10.svg';
import d12 from '../../../../../assets/images/dices/d12.svg';
import d20 from '../../../../../assets/images/dices/d20.svg';

const Dice = ({ value, update }) => {
  let diceImg;

  switch (value) {
    case 4:
      diceImg = d4;
      break;
    case 6:
      diceImg = d6;
      break;
    case 8:
      diceImg = d8;
      break;
    case 10:
      diceImg = d10;
      break;
    case 12:
      diceImg = d12;
      break;
    case 20:
      diceImg = d20;
      break;
    default:
      break;
  }

  const clickHandler = () => {
    update(value);
  };

  return (
    <div title={`dé de ${value}`} className={styles.Dice}>
      <img src={diceImg} onClick={clickHandler} alt={`dé de ${value}`} />
      <span>d{value}</span>
    </div>
  );
};

Dice.propTypes = {
  value: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default Dice;
