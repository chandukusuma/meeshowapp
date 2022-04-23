const INIT_STATE = {
    Spage : []
};

export const Spagereducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "ADD_DATA":

        {console.log(state);

            return {
                Spage:[...state.Spage, action.payload]
            }
        }

        case "get_Data":

            return {
                ...state
            }

        default :
            return state
    }
}


