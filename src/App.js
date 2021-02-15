import React from "react"
import classNames from "classnames"

import "./App.css"

const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]

function App() {
  const [items, setItem] = React.useState(initial)
  const [counter, setCounter] = React.useState(0)
  const [youWin, setWin] = React.useState(false)
  const [size, setSize] = React.useState(400)

  const startGame = () => {
    setItem([...initial].sort(() => Math.random() - 0.5))
    setCounter(0)
    setWin(false)
  }

  const onMoveChip = (index) => {
    if (youWin) return
    const result = [...items]
    const indexZero = items.indexOf(0)
    if (
      index + 1 === indexZero ||
      index - 1 === indexZero ||
      index + 4 === indexZero ||
      index - 4 === indexZero
    ) {
      result[index] = result.splice(indexZero, 1, result[index])[0]
      setCounter((prev) => prev + 1)
    }
    setItem(result)
    setWin(result.join() === initial.join())
  }

  const myRef = React.useRef()
  React.useEffect(() => {
    setSize(myRef.current.offsetWidth)
    window.addEventListener("resize", function () {
      setSize(myRef.current.offsetWidth)
    })
    return () => window.removeEventListener("resize")
  }, [])

  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__counter">
          Ходы:<span>{counter}</span>
        </div>
      </div>
      <div ref={myRef} className="game" style={{ height: `${size}px` }}>
        {items.map((item, index) => (
          <div
            onClick={onMoveChip.bind(null, index)}
            key={`${item}_${index}`}
            className={classNames("game__chip", { "game__chip-active": item === 0 })}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="footer">
        <button className="button" onClick={startGame}>
          Restart
        </button>
      </div>
      {youWin && <div className="window">You WIN</div>}
    </div>
  )
}

export default App
