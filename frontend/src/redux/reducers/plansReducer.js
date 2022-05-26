const initialData = {
    plans: []
};

export const plansReducer = (state = initialData, action) => {

    switch (action.type) {

        case 'GET_ALL_PLANS': {
            return {
                ...state,
                plans: action.payload
            }
        }

        default:
            return state
    }
}
