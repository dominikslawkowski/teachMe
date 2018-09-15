
export function selectedUserReducer (state = [], action) {
     switch(action.type){
        case 'SELECT_THE_USER':
            return [...state, action.payload];
        default:
        return state;
    }
};