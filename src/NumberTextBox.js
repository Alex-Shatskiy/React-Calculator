import React from "react";
class NumberTextBox extends React.Component {
  render() {
    let { value1, value2, operator, total } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="numberBox">
          <lable className="displayOutput">
            {value1}
            {operator}
            {value2}
          </lable>
          <lable className="input">{total}</lable>
        </div>
      </>
    );
  }
}

export default NumberTextBox;
