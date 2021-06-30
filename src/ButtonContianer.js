import React from "react"
import { Grid, ButtonGroup, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
  buttonGroup: {
    width: "100%",
    height: "18%",
    justifyContent: "center",
  },
  button: {
    width: "25%",
    height: "18vh",
  },
})

class ButtonContainer extends React.Component {
  render() {
    const { changeState, clear, changeOperator, calculate, backSpace } =
      this.props
    const { classes } = this.props
    return (
      <>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          fullWidth="true"
          className={classes.buttonGroup}
        >
          <Button className={classes.button} onClick={() => clear()}>
            C
          </Button>
          <Button
            className={classes.button}
            onClick={() => changeOperator("/")}
          >
            /
          </Button>
          <Button
            className={classes.button}
            onClick={() => changeOperator("*")}
          >
            *
          </Button>
          <Button className={classes.button} onClick={() => backSpace()}>
            {"<-"}{" "}
          </Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          className={classes.buttonGroup}
        >
          <Button className={classes.button} onClick={() => changeState(7)}>
            7
          </Button>
          <Button className={classes.button} onClick={() => changeState(8)}>
            8
          </Button>
          <Button className={classes.button} onClick={() => changeState(9)}>
            9
          </Button>
          <Button
            className={classes.button}
            onClick={() => changeOperator("-")}
          >
            -
          </Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          className={classes.buttonGroup}
        >
          <Button className={classes.button} onClick={() => changeState(4)}>
            4
          </Button>
          <Button className={classes.button} onClick={() => changeState(5)}>
            5
          </Button>
          <Button className={classes.button} onClick={() => changeState(6)}>
            6
          </Button>
          <Button
            className={classes.button}
            onClick={() => changeOperator("+")}
          >
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          className={classes.buttonGroup}
        >
          <Button className={classes.button} onClick={() => changeState(1)}>
            1
          </Button>
          <Button className={classes.button} onClick={() => changeState(2)}>
            2
          </Button>
          <Button className={classes.button} onClick={() => changeState(3)}>
            3
          </Button>
          <Button className={classes.button} onClick={() => changeState(".")}>
            .
          </Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          className={classes.buttonGroup}
        >
          <Button className={classes.button} onClick={() => changeState(0)}>
            0
          </Button>
          <Button className={classes.button} onClick={() => calculate()}>
            =
          </Button>
        </ButtonGroup>
      </>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ButtonContainer)
