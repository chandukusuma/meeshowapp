import { createStore } from "redux";
import rooted from "./redux/Reducers/main";

const store = createStore(
    rooted
)

export default store;