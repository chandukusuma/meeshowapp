const INIT_STATE = {
    Spage: [],
};

const INITIAL = {
    Indpage: []
}

const SIGN = {
    data: {
        mobile: "",
        otp: ""
    }
}



export const Spagereducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_DATA":

            {
                console.log(state);

                return {
                    Spage: [action.payload]
                }
            }



        default:
            return state
    }
}

export const Individualreducer = (state = INITIAL, action) => {
    switch (action.type) {
        case "SHOW_DATA":
            return {
                Indpage: [action.payload]
            }

        default:
            return state
    }
}


export const signUpreducer = (state = SIGN, action) => {
    switch (action.type) {
        case "SIGNUP":
            {
                state.data = action.payload
                return {
                    state
                }


            }

            default :
             return state
    }
}




