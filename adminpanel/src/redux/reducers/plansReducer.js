const initialData1 = {
    plans: [],
};

const initialData2 = {
    activeplans: [],
};

export const plansReducer = (state = initialData1, action) => {

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

export const ActivePlansReducer = (state = initialData2, action) => {

    switch (action.type) {

        case 'GET_ALL_ACTIVE_PLANS': {
            return {
                ...state,
                activeplans: action.payload
            }
        }

        default:
            return state
    }
}
