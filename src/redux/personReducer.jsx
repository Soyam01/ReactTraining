const initialData = {
    person : '',
    phone: ''
}

const personReducer = (state = initialData, action) => {

    switch (action.type){
        case "UPADATE_PERSON":
    
        case "UPDATE_PHONE":

        default:
            return state
    }
}

export default personReducer;