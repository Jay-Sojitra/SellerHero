import axios from 'axios';
import { message } from 'antd';

export const AddFaqs = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/faqs/create', reqObj);
            console.log(response);
            message.success('faq added successfully');

            setTimeout(() => {
                window.location.href = '/'
            }, 500);

            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
        catch (error) {
            console.log(error)
            message.error('Something went wrong');
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }

}
