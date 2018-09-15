export const currentUser = (id) => {
    return{
        type: 'USER',
        payload: id
        }
}

export const selectUserAction = (obj) => {
    return {
        type: 'SELECT_THE_USER',
        payload: obj
    }
}
