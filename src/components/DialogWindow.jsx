import React from "react"

import { withStyles, makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { Dialog, DialogTitle } from "@material-ui/core"
import BaseButton from "./BaseButton"

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1B5542"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1B5542"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1B5542"
      }
    }
  }
})(TextField)

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },

  margin: {
    margin: theme.spacing(2)
  }
}))

const DialogWindow = ({ open, mouseCount, dispatch }) => {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = React.useState(open)
  const [inputValue, setInputValue] = React.useState("")

  const handelClick = (e) => {
    const obj = {
      name: inputValue,
      counter: mouseCount,
      send: true
    }
    dispatch({ type: "ADD_PLAYER", payload: obj })

    e.preventDefault()
    setOpenDialog(false)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <Dialog onClose={handelClick} aria-labelledby="simple-dialog-title" open={openDialog}>
      <DialogTitle id="simple-dialog-title">Зарегестрировать результат: {mouseCount} </DialogTitle>
      <form className={classes.root} noValidate>
        <CssTextField
          className={classes.margin}
          id="custom-css-standard-input"
          label="Name"
          value={inputValue}
          onChange={handleChange}
        />
        <BaseButton onClick={handelClick} className={classes.margin}>
          Зарегестрировать
        </BaseButton>
      </form>
    </Dialog>
  )
}

export default DialogWindow
