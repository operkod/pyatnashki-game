import React from "react"
import classNames from "classnames"

const GameBlock = ({ items, onMoveChip }) => {
  const [sizeHeight, setSizeHeight] = React.useState(400)
  const myRef = React.useRef()
  const handleHeight = () => {
    setSizeHeight(myRef.current.offsetWidth)
  }

  React.useEffect(() => {
    setSizeHeight(myRef.current.offsetWidth)
    window.addEventListener("resize", handleHeight)
    return () => window.addEventListener("resize", handleHeight)
  }, [])
  return (
    <div ref={myRef} className="game" style={{ height: `${sizeHeight}px` }}>
      <div className="game__header"></div>
      {items &&
        items.map((item, index) => (
          <div
            onClick={onMoveChip.bind(null, index)}
            key={`${item}_${index}`}
            className={classNames("game__chip", { "game__chip-active": item === 0 })}
          >
            {item}
          </div>
        ))}
    </div>
  )
}
export default GameBlock
