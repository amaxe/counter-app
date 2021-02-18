import React from "react"
import s from './counter.module.css'

type PropsType = {
    startValue: number
    maxValue: number
}

export const Display: React.FC<PropsType> = ({startValue, maxValue}) => {
    let style = ""
    startValue === maxValue && (style = s.maxValue)

    return (
        <div className={s.display}>
            <div className={style}>{startValue}</div>
        </div>
    )
}