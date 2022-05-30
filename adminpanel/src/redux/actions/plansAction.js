import axios from 'axios';
import { message } from 'antd';

export const AddPlans = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/plans/create', reqObj);
            message.success('Plan added successfully');
            console.log(response);

            setTimeout(() => {
                window.location.href = '/'
            }, 500);

            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
        catch (error) {
            console.log(error);
            message.error('something went wrong');
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }

}
