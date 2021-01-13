import React, { FunctionComponent } from 'react';

import { ButtonPropsI } from './props.interface';

const Buttons: FunctionComponent<ButtonPropsI> = ({
  isClearAll,
  getResult,
  onDotClick,
  onNumberClick,
  onClearClick,
  onPercentClick,
  onOperatorClick,
  onChangeSignClick,
  onMCClick,
  onMRClick,
  onMamoryCalcClick,
}) => {
  // addEventListener('mousedown',)

  return (
    <div className='Buttons'>
      <div className='row'>
        {isClearAll && <button onClick={() => onClearClick()} className='bg-gray'>AC</button>}
        {!isClearAll && <button onClick={() => onClearClick(false)} className='bg-gray'>C</button>}
        <button className='bg-gray' onClick={() => onChangeSignClick()}>+\-</button>
        <button className='bg-gray' onClick={() => onPercentClick()}>%</button>
        <button className='bg-orenge' onClick={() => onOperatorClick('/')}>/</button>
      </div>
      <div className='row'>
        <button onClick={() => onMCClick()}>mc</button>
        <button onClick={() => onMRClick()}>mr</button>
        <button onClick={() => onMamoryCalcClick('-')}>m-</button>
        <button className='bg-orenge' onClick={() => onMamoryCalcClick('+')}>m+</button>
      </div>
      <div className='row'>
        <button onClick={() => onNumberClick(7)}>7</button>
        <button onClick={() => onNumberClick(8)}>8</button>
        <button onClick={() => onNumberClick(9)}>9</button>
        <button className='bg-orenge' onClick={() => onOperatorClick('X')}>X</button>
      </div>
      <div className='row'>
        <button onClick={() => onNumberClick(4)}>4</button>
        <button onClick={() => onNumberClick(5)}>5</button>
        <button onClick={() => onNumberClick(6)}>6</button>
        <button className='bg-orenge' onClick={() => onOperatorClick('-')}>-</button>
      </div>
      <div className='row'>
        <button onClick={() => onNumberClick(1)}>1</button>
        <button onClick={() => onNumberClick(2)}>2</button>
        <button onClick={() => onNumberClick(3)}>3</button>
        <button className='bg-orenge' onClick={() => onOperatorClick('+')}>+</button>
      </div>
      <div className='row'>
        <button className='zero' onClick={() => onNumberClick(0)}>0</button>
        <button onClick={() => onDotClick()}>.</button>
        <button className='bg-orenge' onClick={() => getResult()}>=</button>
      </div>
    </div>
  )
}

export default Buttons