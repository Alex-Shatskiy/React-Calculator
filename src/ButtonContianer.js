import React from "react";
class ButtonContainer extends React.Component {
  render() {
    const {
      changeState,
      clear,
      changeOperator,
      calculate,
      backSpace
    } = this.props;
    return (
      <>
        <div className="buttonContainer">
          <div>
            <button onClick={() => clear()}>C</button>
            <button onClick={() => changeOperator("/")}>/</button>
            <button onClick={() => changeOperator("*")}>*</button>
            <button onClick={() => backSpace()}>{"<-"} </button>
          </div>
          <div>
            <button onClick={() => changeState(7)}>7</button>
            <button onClick={() => changeState(8)}>8</button>
            <button onClick={() => changeState(9)}>9</button>
            <button onClick={() => changeOperator("-")}>-</button>
          </div>
          <div>
            <button onClick={() => changeState(4)}>4</button>
            <button onClick={() => changeState(5)}>5</button>
            <button onClick={() => changeState(6)}>6</button>
            <button onClick={() => changeOperator("+")}>+</button>
          </div>
          <div>
            <button onClick={() => changeState(1)}>1</button>
            <button onClick={() => changeState(2)}>2</button>
            <button onClick={() => changeState(3)}>3</button>
            <button onClick={() => changeState(".")}>.</button>
          </div>
          <div>
            <button>0</button>
            <button onClick={() => calculate()}>=</button>
          </div>
        </div>
      </>
    );
  }
}

export default ButtonContainer;
