import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";


export interface State{
    count:number;
}

export const initialstate:State={
count:0
}


const CounterReducer=createReducer(
    initialstate,
    on(increment,state=>({...state,count:state.count+1})),
    on(decrement,state=>({...state,count:state.count-1})),
    on(reset,state=>({...state,count:0}))
)