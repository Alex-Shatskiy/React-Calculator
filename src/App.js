import "./styles.css";
import React from "react";

import NumberTextBox from "./NumberTextBox";
import ButtonContainer from "./ButtonContianer";

class App extends React.Component {
  state = {
    value1: "",
    value2: "",
    operator: "",
    total: ""
  };

  handelChange = (name) => {
    if (this.state.operator == "") {
      if (this.state.total != "") {
        this.setState({ total: "" });
      }
      this.setState({ value1: this.state.value1 + name });
    } else {
      this.setState({ value2: this.state.value2 + name });
    }
  };
  clear = () => {
    this.setState({ value1: "", operator: "", value2: "", total: "" });
  };

  changeOperator = (diffretOperator) => {
    this.setState({ operator: diffretOperator });
  };
  backSpace = () => {
    console.log(";");
    if (this.state.value2 == "") {
      this.setState({ value1: this.state.value1.slice(0, -1) });
    } else {
      this.setState({ value2: this.state.value2.slice(0, -1) });
    }
  };

  calculate = () => {
    let doMath = this.state.value1 + this.state.operator + this.state.value2;
    this.setState({
      total: eval(doMath),
      value1: "",
      value2: "",
      operator: ""
    });
  };

  render() {
    return (
      <div className="App">
        <NumberTextBox
          value1={this.state.value1}
          value2={this.state.value2}
          operator={this.state.operator}
          total={this.state.total}
        />
        <ButtonContainer
          changeOperator={this.changeOperator}
          clear={this.clear}
          changeState={this.handelChange}
          calculate={this.calculate}
          backSpace={this.backSpace}
        />
      </div>
    );
  }
}
export default App;
