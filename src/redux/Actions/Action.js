export const ADD = (element) => {
    return {
        type: "SHOW_DATA",
        payload: element
    }
}

export const SINGLE = (item) => {
    return {
        type: "ADD_DATA",
        payload: item
    }
}

export const GetData = () => {
    return {
        type : "Get_Data",
    }
}

