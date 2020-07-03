import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Dice from './Dice/Dice';
import Multiplier from './Multiplier/Multiplier';
import Result from './Result/Result';

import styles from './DiceRoller.module.scss';
import { addChatMessage } from '../../../../actions';

const DiceRoller = ({ setDicesValue, setRolledDices, user, connection, addChatMessage }) => {
  const [multiplier, setMultiplier] = useState(1);
  // const [result, setResult] = useState(0);
  const [dices, setDices] = useState([4, 6, 8, 10, 12, 20]);

  const changeMultiplier = (event) => {
    if (+event.target.value > 10 || +event.target.value < 1) {
      return;
    }
    setMultiplier(event.target.value);
  };
  const calculateTotal = (value) => {
    let multiplierNumber = +multiplier;
    let newResult = 0;
    let random = () => {
      return Math.floor(Math.random() * value) + 1;
    };

    for (let i = 0; i < multiplierNumber; i++) {
      newResult += random();
    }

    // setResult(newResult);
    setRolledDices(multiplierNumber);
    setDicesValue(newResult);
    addChatMessage({
      message: `${user.username} a lancé ${multiplierNumber} dé${
        multiplierNumber > 1 ? 's' : ''
      } de ${value} et a obtenu ${newResult}`,
    });
    connection.send({
      type: 'diceRoll',
      message: `${user.username} a lancé ${multiplierNumber} dé${
        multiplierNumber > 1 ? 's' : ''
      } de ${value} et a obtenu ${newResult}`,
    });
  };
  return (
    <div className={styles.DiceRoller}>
      <div className={styles.DiceRoller__Multiplier__Container}>
        <p className={styles.DiceRoller__Multiplier}>
          Nombre de dés
          <Multiplier value={multiplier} update={changeMultiplier} />
        </p>
        <div className={styles.DiceRoller__Dice__Container}>
          {dices.map((dice) => (
            <Dice value={dice} update={calculateTotal} />
          ))}
        </div>
        {/* <div className={styles.DiceRoller__Result__Container}>
          <h1 className={styles.DiceRoller__Result}>Résultat</h1>
          <Result result={result} />
        </div> */}
      </div>
    </div>
  );
};

DiceRoller.propTypes = {};

export default DiceRoller;
