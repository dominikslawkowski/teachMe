
const skillReducer = (state = [], action) => {
    console.log(action.payload);
    switch(action.type){
        case 'SKILL':
            return action.payload;
        default:
        return state;
    }
   
};

export default skillReducer;