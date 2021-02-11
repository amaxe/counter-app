import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { Display } from './Display'

function Counter() {

  const START_VALUE = 0
  const MAX_VALUE = 7

  const [counter, setCounter] = useState(START_VALUE)

  const onIncBtn = () => {
    counter < MAX_VALUE && setCounter(counter + 1)
  }

  const onResetBtn = () => {
    setCounter(START_VALUE)
  }

  const incIsDisabled = counter === MAX_VALUE && true
  const resetIsDisabled = counter === START_VALUE && true

  return (
    <div className="App">
      <Display counter={counter} maxValue={MAX_VALUE} />
      <div className="buttons">
        <Buttons name="inc" onClick={onIncBtn} isDisabled={incIsDisabled} />
        <Buttons name="reset" onClick={onResetBtn} isDisabled={resetIsDisabled} />
      </div>
    </div>
  )
}

export default Counter