const immutable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
const randomNumber = () => {
  return [...immutable].sort(() => Math.random() - 0.5)
}
export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ITEM":
      return { ...state, items: randomNumber() }

    case "RESTART":
      const newPlayer = { ...state.player, send: false }
      return { ...state, items: randomNumber(), counter: 0, youWin: false, player: newPlayer }
    case "SET_MOVE":
      const result = [...state.items]
      const indexZero = state.items.indexOf(0)
      if (
        payload + 1 === indexZero ||
        payload - 1 === indexZero ||
        payload + 4 === indexZero ||
        payload - 4 === indexZero
      ) {
        result[payload] = result.splice(indexZero, 1, result[payload])[0]
        if (result.join() === immutable.join()) {
          return { ...state, items: result, youWin: true }
        }
        return { ...state, items: result, counter: state.counter + 1 }
      }
      return { ...state, items: result }
    case "ADD_PLAYER":
      return {
        ...state,
        player: payload
      }
    case "ADD_LEADERS_PLAYERS":
      return { ...state, leadersPlayer: payload }
    default:
      return state
  }
}
