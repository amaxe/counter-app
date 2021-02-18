import React, {useEffect, useState} from 'react'
import {Buttons} from './Buttons'
import {Display} from './Display'
import s from './counter.module.css'
import {Settings} from './Settings'

type PropsType = {
    startValue: number | string
    maxValue: number
    inc: () => void
    reset: (value: number | string) => void
    setStartValue: (value: number | string) => void
    setMaxValue: (value: number) => void
}

function Counter(props: PropsType) {
    // temporary start & max values from inputs' fields
    const [tempStartValue, setTempStartValue] = useState<number | string>(props.startValue)
    const [tempMaxValue, setTempMaxValue] = useState<number>(props.maxValue)

    console.log("start value: ", props.startValue)
    console.log("max value: ", props.maxValue)

    //switch to 'Settings' menu
    const [editMode, setEditMode] = useState<boolean>(false)

    const onIncHandler = () => props.inc()
    const onResetHandler = () => props.reset(tempStartValue)

    //conditions for displaying 'Incorrect values!'
    let incorrectValues = tempStartValue >= tempMaxValue || tempStartValue < 0 || tempMaxValue < 0

    let incBtnDisable = props.startValue >= props.maxValue || props.startValue < 0
        || props.maxValue < 0 || incorrectValues

    let resetBtnDisable = tempStartValue === props.startValue || incorrectValues

    const changeStartValue = (value: number) => setTempStartValue(value)
    const changeMaxValue = (value: number) => setTempMaxValue(value)

    const onSetHandler = () => {
        props.setStartValue(tempStartValue)
        props.setMaxValue(tempMaxValue)
        setEditMode(false)
    }

    let editModeHandler = () => setEditMode(true)

    useEffect(() => {
        if (incorrectValues) {
            props.setStartValue('Incorrect values!')
        } else {
            props.setStartValue("Enter values and press 'set'")
        }
    }, [tempStartValue, tempMaxValue])

    return (
        <div className={s.app}>
            <div className={s.setDisplay}>
                <Settings
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    tempStartValue={tempStartValue}
                    tempMaxValue={tempMaxValue}
                />
                <div className={s.buttons}>
                    <Buttons
                        name="set"
                        onClick={onSetHandler}
                    />
                </div>
            </div>
            <div className={s.mainDisplay}>
                <Display
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                />
                <div className={s.buttons}>
                    <Buttons
                        name="inc"
                        onClick={onIncHandler}
                        isDisabled={incBtnDisable}
                    />
                    <Buttons
                        name="reset"
                        onClick={onResetHandler}
                        isDisabled={resetBtnDisable}
                    />
                </div>
            </div>
        </div>
    )
}

export default Counter