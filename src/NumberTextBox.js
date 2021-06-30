import React from "react"
import { Grid } from "@material-ui/core"
class NumberTextBox extends React.Component {
  render() {
    let { value1, value2, operator, total } = this.props
    console.log(this.props)
    return (
      <>
        <Grid
          container
          spacing={3}
          style={{ width: "100vw", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            style={{ display: "inherit", justifyContent: " center" }}
          >
            <lable className="displayOutput" style={{ fontSize: "30px" }}>
              {value1 == "" && total == "" ? (
                <>Calculator</>
              ) : (
                <>
                  {value1}
                  {operator}
                  {value2}
                </>
              )}
            </lable>
            <lable className="input" style={{ fontSize: "30px" }}>
              {total}
            </lable>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default NumberTextBox
