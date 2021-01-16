import React, { FunctionComponent } from 'react';

import { ButtonPropsI } from './props.interface';
import { GrayButton, OrengeButton, DarkButton, ZeroButton} from '../styles/styles'

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
  document.addEventListener('mousedown', mouseDown)
  document.addEventListener('mouseup', mouseUp)

  function mouseDown(event: any) {
    if(event.target.localName === 'button') {
      const classList = event.target.className
      if(classList.includes('colorDark')) {
        event.target.setAttribute('style', 'background: #616161')
      };

      if(classList.includes('colorOrenge')) {
        event.target.setAttribute('style', 'background: #ffd496')
      };
      
      if(classList.includes('colorGray')) {
        event.target.setAttribute('style', 'background: #e8e8e8')
      };
    };
  };

  function mouseUp(event: any) {
    if(event.target.localName === 'button') {
      event.target.removeAttribute('style', 'background: red')
    };
  };

  return (
    <div className='Buttons'>
      <div className='row'>
        {isClearAll ? <GrayButton className='colorGray' onClick={() => onClearClick()}>AC</GrayButton> : <GrayButton className='colorGray' onClick={() => onClearClick(false)}>C</GrayButton>}
        <GrayButton className='colorGray' onClick={() => onChangeSignClick()}>+\-</GrayButton>
        <GrayButton className='colorGray' onClick={() => onPercentClick()}>%</GrayButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('/')}>/</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onMCClick()}>mc</DarkButton>
        <DarkButton className='colorDark' onClick={() => onMRClick()}>mr</DarkButton>
        <DarkButton className='colorDark' onClick={() => onMamoryCalcClick('-')}>m-</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onMamoryCalcClick('+')}>m+</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onNumberClick(7)}>7</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(8)}>8</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(9)}>9</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('X')}>X</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onNumberClick(4)}>4</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(5)}>5</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(6)}>6</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('-')}>-</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onNumberClick(1)}>1</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(2)}>2</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(3)}>3</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('+')}>+</OrengeButton>
      </div>
      <div className='row'>
        <ZeroButton className='colorDark' onClick={() => onNumberClick(0)}>0</ZeroButton>
        <DarkButton className='colorDark' onClick={() => onDotClick()}>.</DarkButton>
        <DarkButton className='colorDark' onClick={() => getResult()}>=</DarkButton>
      </div>
    </div>
  )
};

export default Buttons