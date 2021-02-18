import {combineReducers, createStore} from "redux"
import {loadState, saveState} from "../utils/localStorage"
import {counter4Reducer} from "./counter4-reducer"
import {counter5Reducer} from "./counter5-reducer"

const reducers = combineReducers({
    counter4: counter4Reducer,
    counter5: counter5Reducer
})

const persistedState = loadState()
export let store = createStore(reducers, persistedState)

store.subscribe(() => {
    saveState({
        counter4: store.getState().counter4,
        counter5: store.getState().counter5
    })
})

export type AppRootStateType = ReturnType<typeof reducers>