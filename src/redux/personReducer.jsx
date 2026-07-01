const initialData = {
    name : 'RAM',
    phone: '01234'
}

const personReducer = (state = initialData, action) => {

    switch (action.type){
        case "UPDATE_NAME":
            
    
        case "UPDATE_PHONE":

        default:
            return state
    }
}

export default personReducer;