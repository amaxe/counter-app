type PropsType = {
    name: string
    isDisabled: boolean
    onClick: () => void
}

export function Buttons(props: PropsType) {
    return (
        <span >
            <button disabled={props.isDisabled} onClick={props.onClick}> {props.name} </button>
        </span>
    )
}