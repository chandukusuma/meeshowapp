const INIT_STATE = {
    Spage : []
};

export const Spagereducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "ADD_DATA":
            return {
                Spage:[action.payload]
            }

        default :
            return state
    }
}