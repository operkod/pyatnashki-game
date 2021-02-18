import React from "react"

import Context from "context/Context"
import DialogWindow from "components/DialogWindow"
import BaseButton from "components/BaseButton"
import PlayerBlock from "components/PlayerBlock"
import GameBlock from "components/GameBlock"
import { Dialog } from "@material-ui/core"

import "./App.css"

function App() {
  const { state, dispatch } = React.useContext(Context)
  const { items, youWin, counter, leadersPlayer } = state
  const [openWindow, swtOpenWindow] = React.useState(false)
  const startGame = () => {
    dispatch({ type: "RESTART" })
  }

  const onMoveChip = (payload) => {
    dispatch({ type: "SET_MOVE", payload })
  }
  const handleClickOpen = () => {
    swtOpenWindow(true)
  }
  const handleClose = () => {
    swtOpenWindow(false)
  }
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__counter">
          Ходы:<span>{counter}</span>
        </div>
        <div className="header__player">
          <BaseButton onClick={handleClickOpen}>leaders</BaseButton>
        </div>
      </div>
      <GameBlock items={items} onMoveChip={onMoveChip} />
      <div className="footer">
        <BaseButton onClick={startGame}>Restart</BaseButton>
      </div>
      <DialogWindow open={youWin} mouseCount={counter} dispatch={dispatch} />
      <Dialog
        // selectedValue={selectedValue}
        open={openWindow}
        onClose={handleClose}
      >
        <PlayerBlock leadersPlayer={leadersPlayer} />
      </Dialog>
    </div>
  )
}

export default App
