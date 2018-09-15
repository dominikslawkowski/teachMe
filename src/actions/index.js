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
export const learn = (skill) => {
    return{
        type: 'LEARN',
        payload: skill
    }
}
