import React, {useState} from 'react'
import {Button} from './Button'
import {Display} from './Display'
import s from './counter.module.css'
import {Settings} from './Settings'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {incrementAC, resetAC, setMaxValueAC, setStartValueAC} from "../../redux/counter5-reducer";

function Counter() {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter5.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter5.maxValue)

    // temporary start/max values from inputs' fields
    const [tempStartValue, setTempStartValue] = useState<number>(startValue)
    const [tempMaxValue, setTempMaxValue] = useState<number>(maxValue)

    //switch to 'Settings' menu
    const [editMode, setEditMode] = useState<boolean>(false)

    const dispatch = useDispatch()

    const onIncHandler = () => dispatch(incrementAC())
    const onResetHandler = () => dispatch(resetAC(tempStartValue))

    // buttons disable conditions
    let incBtnDisable = startValue === maxValue
    let resetBtnDisable = startValue === tempStartValue
    let setBtnDisable = tempStartValue >= tempMaxValue || tempStartValue < 0 || tempMaxValue < 0

    const changeStartValue = (value: number) => setTempStartValue(value)
    const changeMaxValue = (value: number) => setTempMaxValue(value)

    const onSetHandler = () => {
        dispatch(setStartValueAC(tempStartValue))
        dispatch(setMaxValueAC(tempMaxValue))
        setEditMode(false)
    }

    let editModeHandler = () => setEditMode(true)

    return (
        <div className={s.app}>
            {editMode
                ? <div className={s.setDisplay}>
                    <Settings
                        changeStartValue={changeStartValue}
                        changeMaxValue={changeMaxValue}
                        tempStartValue={tempStartValue}
                        tempMaxValue={tempMaxValue}
                    />
                    <div className={s.buttons}>
                        <Button
                            name="set"
                            onClick={onSetHandler}
                            isDisabled={setBtnDisable}
                        />
                    </div>
                </div>
                : <div className={s.mainDisplay}>
                    <Display
                        startValue={startValue}
                        maxValue={maxValue}
                    />
                    <div className={s.buttons}>
                        <Button
                            name="inc"
                            onClick={onIncHandler}
                            isDisabled={incBtnDisable}
                        />
                        <Button
                            name="reset"
                            onClick={onResetHandler}
                            isDisabled={resetBtnDisable}
                        />
                        <Button
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