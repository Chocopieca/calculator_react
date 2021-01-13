import React, { FunctionComponent, useState } from 'react';
import './App.css';
import Buttons from '../component/buttons'

const App: FunctionComponent = () => {
  const [result, setResult] = useState<string>("0")
  let [display, setDisplay] = useState<string>("0")
  const [isNewDisplay, setIsNewDisplay] = useState<boolean>(false)
  const [operator, setOperator] = useState<string>('')
  const [memory, setMemory] = useState<string>('0')

  const calculate = () => {
    let newResult = +result;
    if(!result) {
      return
    }

    switch(operator) {
      case '+':
        newResult += +display;
        break;
      case '-':
        newResult -= +display;
        break;
      case 'X':
        newResult *= +display;
        break;
      case '/':
        if(display === "0") {
          return
        }
        newResult /= +display
    }
    return newResult
  };

  const getNumberOnDisplay = (number: string) => {
    let newNumber;
    if(number.length > 7) {
      newNumber = Number(number.slice(0, 8)).toString()
      setResult(newNumber)
      setDisplay(newNumber)
    } else {
      newNumber = Number(number).toString()
      setResult(newNumber)
      setDisplay(newNumber)
    }
  }

  const getResult = () => {
    getNumberOnDisplay(`${calculate()}`)
    setOperator('')
  }

  const onOperatorClick = (oper: string) => {
    if(result !== '0' && operator === oper) {
      const newResult = calculate()
      setResult(`${newResult}`)
      getNumberOnDisplay(`${newResult}`)
    } 
    
    if(result === '0') {
      setResult(display)
    }

    setOperator(oper)
    setIsNewDisplay(true)
  };

  const onNumberClick = (number: number) => {
    let newDisplay = display;

    if(display.length > 7) return

    if(newDisplay === '0') {
      newDisplay = ''
    }

    if(isNewDisplay) {
      newDisplay = `${number}`
      setIsNewDisplay(false)
    } else {
      newDisplay = `${newDisplay}` + number
    }
    setDisplay(newDisplay)
  };

  const onDotClick = () => {
    let newDisplay = `${display}.`
    setDisplay(newDisplay)
  }

  const onClearClick = ( isClearAll: boolean = true ) => {
    if(isClearAll) {
      setOperator('')
      setDisplay("0")
      setResult("0")
    } else {
      setDisplay("0")
    }
  };

  const isClearAll = display === "0";

  const onChangeSignClick = () => {
    setResult(`${+display * -1}`)
    setDisplay(`${+display * -1}`)
  }

  const onPercentClick = () => {
    setResult('0')
    setOperator('')
    getNumberOnDisplay(`${+display / 100}`)
  }

  const onMRClick = () => {
    setResult(memory);
    setDisplay(memory)
    setIsNewDisplay(true)
  }

  const onMCClick = () => {
    setMemory('0')
  }

  const onMamoryCalcClick = (oper: string) => {
    switch(oper) {
      case'+':
        setMemory(`${Number(memory) + Number(display)}`)
        break;
      case'-':
        setMemory(`${Number(memory) - Number(display)}`)
        break;
    }
  }

  return (
    <div className="App">
      <div className='display'>{display}</div>
      <Buttons
        isClearAll={isClearAll}
        getResult={getResult}
        onDotClick={onDotClick}
        onPercentClick={onPercentClick}
        onClearClick={onClearClick}
        onNumberClick={onNumberClick}
        onChangeSignClick={onChangeSignClick}
        onOperatorClick={onOperatorClick}
        onMCClick={onMCClick}
        onMRClick={onMRClick}
        onMamoryCalcClick={onMamoryCalcClick}
      />
    </div>
  );
};

export default App;
