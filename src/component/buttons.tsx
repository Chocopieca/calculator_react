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
      setColor(event, 'colorDark', ' #616161')
      setColor(event, 'colorOrenge', ' #ffd496')
      setColor(event, 'colorGray', ' #e8e8e8')
    };
  };
  
  function setColor(event: any, buttonColor: string, color: string) {
    const classList = event.target.className
    if(classList.includes(buttonColor)) {
      event.target.setAttribute('style', `background: ${color}`)
    };
  }

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
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('/')} id='division'>/</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onMCClick()}>mc</DarkButton>
        <DarkButton className='colorDark' onClick={() => onMRClick()} id='memoryRead'>mr</DarkButton>
        <DarkButton className='colorDark' onClick={() => onMamoryCalcClick('-')}>m-</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onMamoryCalcClick('+')}>m+</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onNumberClick(7)}>7</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(8)}>8</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(9)}>9</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('X')} id='multiplication'>X</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onNumberClick(4)}>4</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(5)}>5</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(6)}>6</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('-')} id='subtraction'>-</OrengeButton>
      </div>
      <div className='row'>
        <DarkButton className='colorDark' onClick={() => onNumberClick(1)}>1</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(2)}>2</DarkButton>
        <DarkButton className='colorDark' onClick={() => onNumberClick(3)}>3</DarkButton>
        <OrengeButton className='colorOrenge' onClick={() => onOperatorClick('+')} id='addition'>+</OrengeButton>
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