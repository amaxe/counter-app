type PropsType = {
    name: string
    onClick: () => void
    isDisabled?: boolean
}

export function Button(props: PropsType) {
    return (
        <span >
            <button disabled={props.isDisabled} onClick={props.onClick}> {props.name} </button>
        </span>
    )
}