import axios from 'axios';
import { message } from 'antd';

export const userSubscription = (email) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/subscriberes/subscribe', { email })
            message.success('Registraction successfull');
            window.location.reload();
            console.log(response);

            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
        catch (error) {
            console.log(error)
            message.error('Something went wrong')
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }

}

