import React, {useEffect, useState} from 'react'
import {Buttons} from './Buttons'
import {Display} from './Display'
import s from './counter.module.css'
import {Settings} from './Settings'

function Counter() {
    const [startInputValue, setStartInputValue] = useState<number>(Number(localStorage.start))
    const [maxInputValue, setMaxInputValue] = useState<number>(Number(localStorage.max))
    const [startValue, setStartValue] = useState<number | string>(startInputValue)
    const [maxValue, setMaxValue] = useState<number>(maxInputValue)

    const onIncHandler = () => setStartValue(Number(startValue) + 1)
    const onResetHandler = () => setStartValue(startInputValue)

    let commonDisableConditions = startInputValue >= maxInputValue || startInputValue < 0 || maxInputValue < 0
    let incButtonDisableConditions = startValue >= maxValue || startValue < 0
        || maxValue < 0 || commonDisableConditions
    let resetButtonDisableConditions = startInputValue === startValue || commonDisableConditions
    let setButtonDisableConditions = startInputValue === startValue && maxInputValue === maxValue
        || commonDisableConditions

    const changeStartValue = (value: number) => setStartInputValue(value)
    const changeMaxValue = (value: number) => setMaxInputValue(value)

    const onSetHandler = () => {
        setStartValue(startInputValue)
        setMaxValue(maxInputValue)
        localStorage.setItem("start", String(startInputValue))
        localStorage.setItem("max", String(maxInputValue))
    }

    useEffect(() => {
        if (commonDisableConditions) {
            setStartValue('Incorrect values!')
        } else {
            setStartValue("Enter values and press 'set'")
        }
    }, [startInputValue, maxInputValue])

    return (
        <div className={s.app}>
            <div className={s.setDisplay}>
                <Settings
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                />
                <div className={s.buttons}>
                    <Buttons
                        name="set"
                        onClick={onSetHandler}
                        isDisabled={setButtonDisableConditions}
                    />
                </div>
            </div>
            <div className={s.mainDisplay}>
                <Display
                    startValue={startValue}
                    maxValue={maxValue}
                />
                <div className={s.buttons}>
                    <Buttons
                        name="inc"
                        onClick={onIncHandler}
                        isDisabled={incButtonDisableConditions}
                    />
                    <Buttons
                        name="reset"
                        onClick={onResetHandler}
                        isDisabled={resetButtonDisableConditions}
                    />
                </div>
            </div>

        </div>
    )
}

export default Counter