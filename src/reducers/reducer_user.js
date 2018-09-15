
const user = (state = null, action) => {
    console.log(action.payload);
    switch(action.type){
        case 'USER':
            return action.payload;
        default:
        return state;
    }
   
};

export default user;