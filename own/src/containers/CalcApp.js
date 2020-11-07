import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import CalcButton from '../components/CalcButton';

// 計算機 App
const CalcApp = (props) => {

  const [display, setDisplay] = useState(0);
  const [Num1, setNum1] = useState(0);
  const [Num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [phase, setPhase] = useState(1);

  const resetState = () => {
    setDisplay(0);
    setNum1(0);
    setNum2(0);
    setOperator("");
    setPhase(1);
  }

  const showNotImplemented = () => {
    console.warn('This function is not implemented yet.');
  }

  const changeNum = (num) => {
    if(phase == 1){
      const number = (Num1 * 10 + num + 0);
      setNum1(number);
      setDisplay(number);
    } else if(phase == 2 || phase == 3){
      setNum1(display);
      const number = (Num2 * 10 + num);
      setNum2(number);
      setDisplay(number);
      setPhase(3);
    }
    // alert(display * 10 + 7);
  }

  const equal = () => {
    if(phase == 2){
      let number;
      if(operator === "x"){
        number = display * Num1;
      } else if(operator === "-"){
        number = display - Num1;
      } else if(operator === "+"){
        number = display + Num1;
      } else if(operator === "÷"){
        number = display / Num1;
      }
      setDisplay(number);
    } else if(phase == 3){
      let number;
      if(operator === "x"){
        number = Num2 * Num1;
      } else if(operator === "-"){
        number = Num1 - Num2;
      } else if(operator === "+"){
        number = Num1 + Num2;
      } else if(operator === "÷"){
        number = Num1 / Num2;
      }
      setDisplay(number);
      setNum1(Num2);
      setNum2(0);
      setPhase(2);
    }
  }

  const changeOp = (op) => {
    if(phase === 1){
      setPhase(2);
      setOperator(op);
    } else if(phase == 2){
      setOperator(op);
    } else if(phase == 3){
      
    }
  }

  return (
    <div className="calc-app">
      <div className="calc-container">
        <div className="calc-output">
          <div className="calc-display">{display}</div>
        </div>
        <div className="calc-row">
          <CalcButton onClick={resetState}>AC</CalcButton>
          <CalcButton onClick={showNotImplemented}>+/-</CalcButton>
          <CalcButton onClick={showNotImplemented}>%</CalcButton>
          <CalcButton className="calc-operator" onClick={changeOp}>÷</CalcButton>
        </div>
        <div className="calc-row">
          <CalcButton className="calc-number" onClick={changeNum} >7</CalcButton>
          <CalcButton className="calc-number" onClick={changeNum}>8</CalcButton>
          <CalcButton className="calc-number" onClick={changeNum}>9</CalcButton>
          <CalcButton className="calc-operator" onClick={changeOp}>x</CalcButton>
        </div>
        <div className="calc-row">
          <CalcButton className="calc-number" onClick={changeNum}>4</CalcButton>
          <CalcButton className="calc-number" onClick={changeNum}>5</CalcButton>
          <CalcButton className="calc-number" onClick={changeNum}>6</CalcButton>
          <CalcButton className="calc-operator" onClick={changeOp}>-</CalcButton>
        </div>
        <div className="calc-row">
          <CalcButton className="calc-number" onClick={changeNum}>1</CalcButton>
          <CalcButton className="calc-number" onClick={changeNum}>2</CalcButton>
          <CalcButton className="calc-number" onClick={changeNum}>3</CalcButton>
          <CalcButton className="calc-operator" onClick={changeOp}>+</CalcButton>
        </div>
        <div className="calc-row">
          <CalcButton className="bigger-btn" onClick={changeNum}>0</CalcButton>
          <CalcButton className="calc-number">.</CalcButton> 
          <CalcButton className="calc-operator" id="equal" onClick={equal}>=</CalcButton>
        </div>
      </div>
    </div>
  );
}

export default CalcApp;
