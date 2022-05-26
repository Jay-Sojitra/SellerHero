import axios from 'axios';

export const getAllPlans = () => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.get('/api/plans/getallplan')
            console.log(response);
            dispatch({
                type: 'GET_ALL_PLANS',
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
