import Counter from "./Counter";
import {
    ActionTypes,
    incrementAC,
    resetAC,
    setMaxValueAC,
    setStartValueAC
} from "../../redux/counter4-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        startValue: state.counter4.startValue,
        maxValue: state.counter4.maxValue
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        inc: () => {
            dispatch(incrementAC())
        },
        reset: (value: number | string) => {
            dispatch(resetAC(value))
        },
        setStartValue: (value: number | string) => {
            dispatch(setStartValueAC(value))
        },
        setMaxValue: (value: number) => {
            dispatch(setMaxValueAC(value))
        }
    }
}


const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer