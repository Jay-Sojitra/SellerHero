const initialData = {
    faqs: []
};

export const faqsReducer = (state = initialData, action) => {

    switch (action.type) {

        case 'GET_ALL_FAQS': {
            return {
                ...state,
                faqs: action.payload
            }
        }

        default:
            return state
    }
}
