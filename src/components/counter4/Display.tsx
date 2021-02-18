import s from './counter.module.css'

type PropsType = {
    startValue: number | string
    maxValue: number
}

export function Display(props: PropsType) {
    let value = props.startValue
    let style = ""

    if (value === "Incorrect values!") {
        value = props.startValue
        style = s.displayWarningMessage

    } else if (props.startValue === "Enter values and press 'set'") {
        value = props.startValue
        style = s.displayNormalMessage

    } else if (props.startValue === props.maxValue) {
        style = s.maxValue
    }

    return (
        <div className={s.display}>
            <div className={style}>{value}</div>
        </div>
    )
}