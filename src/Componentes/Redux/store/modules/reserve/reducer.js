import produce from 'immer';

export default function reserve(state = [], action) {

    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1;

                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1,
                    });
                }

            });

        case 'REMOVE_REVERSE':

            return produce(state, draft => {
                const index = state.findIndex(trip => trip.id === action.id);

                if (index >= 0) {
                    draft.splice(index, 1);
                }
            });

            case 'UPDATE_REVERSE': {

                if (action.amount <= 0){
                    return state;
                }

                return produce(state, draft => {
                    const index = state.findIndex(trip => trip.id === action.id);

                    if (index >= 0){
                        draft[index].amount = Number(action.amount) == 0 ? 0 : Number(action.amount);
                    }
                })
            }

            default:
            return state;
    }
}

