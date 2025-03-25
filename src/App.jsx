import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const equals = () => {
    if (firstOperand !== null && operator !== null) {
      const result = calculate(firstOperand, parseFloat(display), operator);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(true);
    }
  };

  const styles = {
    calculator: {
      width: '300px',
      margin: '50px auto',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    display: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'right',
      padding: '20px',
      fontSize: '2.5em'
    },
    keypad: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
      padding: '15px'
    },
    button: {
      backgroundColor: '#e0e0e0',
      border: 'none',
      padding: '15px',
      fontSize: '1.5em',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    hoverButton: {
      backgroundColor: '#d0d0d0'
    },
    functionButton: {
      backgroundColor: '#f5a623',
      color: 'white'
    },
    functionHoverButton: {
      backgroundColor: '#f79d3d'
    },
    equalsButton: {
      backgroundColor: '#4a90e2',
      color: 'white',
      gridRow: 'span 2'
    },
    equalsHoverButton: {
      backgroundColor: '#5aa3e6'
    },
    zeroButton: {
      gridColumn: 'span 2'
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>{display}</div>
      <div style={styles.keypad}>
        <button 
          style={{...styles.button, ...styles.functionButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.functionHoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.functionButton.backgroundColor}
          onClick={() => clear()}
        >
          AC
        </button>
        <button 
          style={{...styles.button, ...styles.functionButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.functionHoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.functionButton.backgroundColor}
          onClick={() => performOperation('/')}
        >
          ÷
        </button>
        <button 
          style={{...styles.button, ...styles.functionButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.functionHoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.functionButton.backgroundColor}
          onClick={() => performOperation('*')}
        >
          ×
        </button>

        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(7)}
        >
          7
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(8)}
        >
          8
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(9)}
        >
          9
        </button>
        <button 
          style={{...styles.button, ...styles.functionButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.functionHoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.functionButton.backgroundColor}
          onClick={() => performOperation('-')}
        >
          -
        </button>

        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(4)}
        >
          4
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(5)}
        >
          5
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(6)}
        >
          6
        </button>
        <button 
          style={{...styles.button, ...styles.functionButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.functionHoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.functionButton.backgroundColor}
          onClick={() => performOperation('+')}
        >
          +
        </button>

        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(1)}
        >
          1
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(2)}
        >
          2
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(3)}
        >
          3
        </button>
        <button 
          style={{...styles.button, ...styles.equalsButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.equalsHoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.equalsButton.backgroundColor}
          onClick={() => equals()}
        >
          =
        </button>

        <button 
          style={{...styles.button, ...styles.zeroButton}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDigit(0)}
        >
          0
        </button>
        <button 
          style={{...styles.button}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.hoverButton.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => inputDecimal()}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;