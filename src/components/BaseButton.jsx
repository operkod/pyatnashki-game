import { Button, withStyles } from "@material-ui/core"
import React from "react"
const CssButton = withStyles({
  root: {
    backgroundColor: "#1f1e1e",
    "&:hover": {
      backgroundColor: "#302d2d"
    }
  }
})(Button)

const BaseButton = ({ children, className, onClick }) => {
  return (
    <CssButton
      onClick={onClick}
      className={className}
      variant="contained"
      color="primary"
      disableElevation
    >
      {children}
    </CssButton>
  )
}
export default BaseButton
