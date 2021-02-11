import React, {useEffect, useState} from 'react'
import {Buttons} from './Buttons'
import {Display} from './Display'
import s from './counter.module.css'
import {Settings} from './Settings'

function Counter() {
    const [startInputValue, setStartInputValue] = useState<number>(Number(localStorage.start))
    const [maxInputValue, setMaxInputValue] = useState<number>(Number(localStorage.max))
    const [startValue, setStartValue] = useState<number | string>(startInputValue | 0)
    const [maxValue, setMaxValue] = useState<number>(maxInputValue | 1)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onIncHandler = () => setStartValue(Number(startValue) + 1)

    const onResetHandler = () => setStartValue(startInputValue)

    let commonDisableConditions = startInputValue >= maxInputValue || startInputValue < 0 || maxInputValue < 0
    let incButtonDisableConditions = startValue >= maxValue || startValue < 0
        || maxValue < 0 || commonDisableConditions
    let resetButtonDisableConditions = startInputValue === startValue || commonDisableConditions


    const changeStartValue = (value: number) => setStartInputValue(value)
    const changeMaxValue = (value: number) => setMaxInputValue(value)

    const onSetHandler = () => {
        setStartValue(startInputValue)
        setMaxValue(maxInputValue)
        localStorage.setItem("start", String(startInputValue))
        localStorage.setItem("max", String(maxInputValue))
        setEditMode(false)
    }

    let editModeHandler = () => {
        setEditMode(true)
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
            {editMode
                ? <div className={s.setDisplay}>
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
                        />
                    </div>
                </div>
                : <div className={s.mainDisplay}>
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
                        <Buttons
                            name="set"
                            onClick={editModeHandler}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default Counter