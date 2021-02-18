export type IncrementActionType = {
    type: 'INCREMENT'
}

export type ResetActionType = {
    type: 'RESET'
    value: number | string
}

export type SetStartValueActionType = {
    type: 'SET-START-VALUE'
    value: number | string
}

export type SetMaxValueActionType = {
    type: 'SET-MAX-VALUE'
    value: number
}

export type ActionTypes = IncrementActionType | ResetActionType | SetStartValueActionType | SetMaxValueActionType

export type InitialStateType = {
    startValue: number | string
    maxValue: number
}

const initialState = {
    startValue: 0,
    maxValue: 1
}

export const counter4Reducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, startValue: Number(state.startValue) + 1
            }
        case 'RESET':
            return {
                ...state, startValue: action.value
            }
        case 'SET-START-VALUE':
            return {
                ...state,
                startValue: action.value
            }

        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.value
            }

        default:
            return state
    }
}

export const incrementAC = (): IncrementActionType => {
    return {type: 'INCREMENT'}
}

export const resetAC = (value: number | string): ResetActionType => {
    return {type: 'RESET', value}
}

export const setStartValueAC = (value: number | string): SetStartValueActionType => {
    return {type: "SET-START-VALUE", value}
}

export const setMaxValueAC = (value: number): SetMaxValueActionType => {
    return {type: "SET-MAX-VALUE", value}
}