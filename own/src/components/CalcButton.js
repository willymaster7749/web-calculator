import React from 'react';
import PropTypes from 'prop-types';


function showNotImplemented() {
  console.warn('This function is not implemented yet.');
}

const CalcButton = (props) => {
  // const { className, children, onClick } = props;
  const extraClass = props.className || '';
  if(props.className === "calc-operator" && !props.id){
    return (
      <button
        className={`calc-btn ${extraClass}`}
        onClick={() => props.onClick(props.children)} >
        {props.children}
      </button>
    );
  } else if((props.className === "calc-number" || props.className === "bigger-btn") && !props.id){
    return (
      <button
        className={`calc-btn ${extraClass}`}
        onClick={() => props.onClick(parseInt(props.children, 10))} >
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        className={`calc-btn ${extraClass}`}
        onClick={() => props.onClick()} >
        {props.children}
      </button>
    );
  }
};


CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CalcButton.defaultProps = {
  onClick: showNotImplemented,
};

export default CalcButton;
