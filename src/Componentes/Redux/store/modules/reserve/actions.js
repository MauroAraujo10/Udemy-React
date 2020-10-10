export function addReserve(trip) {
    return {
        type: 'ADD_RESERVE',
        trip
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_REVERSE',
        id
    } 
}

export function updateAmountReserve(id, amount) {
    return {
        type: 'UPDATE_REVERSE',
        id,
        amount
    } 
}