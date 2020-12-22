
export default function(state=null, action){
    switch(action.type){
        case "ADD_IN_CART":
            return action.payload;
            break;      
    }
    return state;
}