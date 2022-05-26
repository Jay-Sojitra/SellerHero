import axios from 'axios';

export const getAllFaqs = () => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.get('/api/faqs/getallfaqs')
            console.log(response);
            dispatch({
                type: 'GET_ALL_FAQS',
                payload: response.data
            })
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
        catch (error) {
            console.log(error)
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }

}
