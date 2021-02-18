import React from 'react'
import Counter1 from './components/counter1/Counter'
import Counter2 from './components/counter2/Counter'
import Counter3 from './components/counter3/Counter'
import Counter4 from './components/counter4/CounterContainer'
import Counter5 from "./components/counter5/Counter";

function App() {
    return (
        <div>
            {/*<Counter1 />*/}
            {/*<Counter2/>*/}
            {/*<Counter3/>*/}

            {/*Redux, HOC*/}
            {/*<Counter4 />*/}

            {/*Redux, useSelector, useDispatch*/}
            <Counter5 />

        </div>
    )
}

export default App