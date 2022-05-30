import axios from 'axios';

export const getAllSubscribers = () => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.get('/api/subscriberes/getallsubscribers');
            console.log(response);

            dispatch({
                type: 'GET_ALL_SUBSCRIBERS',
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
