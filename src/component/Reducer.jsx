import React,{useReducer} from 'react'

const Reducer = () =>{
    const initialState = 0;
    const reducerFn = (state,action) =>{
        switch(action.type){
            case 'INCREMENT':
                return state+1;
            case 'DECREMENT':
                return state-1;
            default:
                return state;
        }
    }
    const [count,dispatch] = useReducer(reducerFn,initialState);
    return(
        <div>
            <h1>Count from UseReducer:{count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    )
}
export default Reducer;