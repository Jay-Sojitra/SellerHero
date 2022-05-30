const initialData = {
    subscribers: []
};

export const subscribersReducer = (state = initialData, action) => {

    switch (action.type) {

        case 'GET_ALL_SUBSCRIBERS': {
            return {
                ...state,
                subscribers: action.payload
            }
        }

        default:
            return state
    }
}
