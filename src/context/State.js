import React from "react"
import Context from "./Context"
import Reducer from "./Reducer"
import firebase from "firebase"

const State = ({ children }) => {
  const initialState = {
    items: [],
    counter: 0,
    youWin: false,
    player: {
      name: "Operkod",
      counter: null,
      send: false
    },
    leadersPlayer: []
  }
  const [state, dispatch] = React.useReducer(Reducer, initialState)
  const playersRef = firebase.database().ref("player")
  var mostViewedPosts = firebase.database().ref("player").orderByValue()
  console.log(mostViewedPosts)
  React.useEffect(() => {
    dispatch({ type: "SET_ITEM" })
    const response = []
    playersRef.on("child_added", (data, prevChildKey) => {
      response.push(data.val())
    })
    dispatch({ type: "ADD_LEADERS_PLAYERS", payload: response })
  }, [])

  React.useEffect(() => {
    if (state.player.send) {
      playersRef.push({
        name: state.player.name,
        counter: state.player.counter
      })
      dispatch({ type: "RESTART" })
    }
  }, [state.player])

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}
export default State
