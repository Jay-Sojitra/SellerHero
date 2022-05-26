import axios from 'axios';
import { message } from 'antd';

export const userLogin = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/users/login', reqObj)
            message.success('Login success');
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
            console.log(error)
            message.error('Something went wrong')
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }

}


export const userRegister = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
           const response = await axios.post('/api/users/register', reqObj)
            message.success('Registraction successfull');
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
            console.log(error)
            message.error('Something went wrong')
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }

}

