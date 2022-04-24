import { combineReducers } from "redux";
import { Spagereducer } from "./reducer";
import { Individualreducer } from "./reducer";


const rooted = combineReducers({
    Spagereducer,
    Individualreducer
})

export default rooted
