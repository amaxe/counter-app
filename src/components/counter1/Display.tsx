import "../../App.css"

type PropsType = {
    counter: number
    maxValue: number
}

export function Display(props: PropsType) {
    return (
        <div>            
            <div className={props.counter === props.maxValue ? "display-red" : "display"}>
                {props.counter}
            </div>            
        </div>
    )
}