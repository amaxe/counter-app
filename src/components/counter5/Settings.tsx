import {ChangeEvent} from "react"
import s from './counter.module.css'

type PropsType = {
    tempStartValue: number
    tempMaxValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
}

export function Settings(props: PropsType) {

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(e.currentTarget.valueAsNumber)
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.valueAsNumber)
    }

    let inputWarnings = props.tempStartValue >= props.tempMaxValue
        || props.tempStartValue < 0
        || props.tempMaxValue < 0

    return (
        <div className={s.settingsInput}>
            <div>
                <span>start value: </span>
                <input
                    className={inputWarnings ? s.input : ""}
                    name="startValue"
                    type="number"
                    onChange={startValueHandler}
                    value={props.tempStartValue}
                />
            </div>

            <div>
                <span>max value: </span>
                <input
                    className={inputWarnings ? s.input : ""}
                    name="maxValue"
                    type="number"
                    onChange={maxValueHandler}
                    value={props.tempMaxValue}
                />
            </div>
        </div>
    )
}