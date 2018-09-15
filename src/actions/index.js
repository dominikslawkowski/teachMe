export const currentUser = (id) => {
    return{
        type: 'USER',
        payload: id
        }
}

export const learn = (skill) => {
    return{
        type: 'LEARN',
        payload: skill
        }
}
