import { combineReducers } from "redux";
import { Spagereducer } from "./reducer";
import { Individualreducer } from "./reducer";
import { signUpreducer } from "./reducer";


const rooted = combineReducers({
    Spagereducer,
    Individualreducer,
    signUpreducer
})

export default rooted
