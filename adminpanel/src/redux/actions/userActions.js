import axios from 'axios';
import { message } from 'antd';

export const getAllUsers = () => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.get('/api/users/getallusers')
            console.log(response);
            dispatch({
                type: 'GET_ALL_USERS',
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

export const userLogin = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/admin/login', reqObj)
            message.success('Login success');
            console.log(response);
            setTimeout(() => {
                window.location.href = '/'
            }, 500);
            localStorage.setItem('user', JSON.stringify(response.data))

            console.log(response);
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

export const userRegister = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/admin/register', reqObj)
            message.success('Register success');
            console.log(response);
            setTimeout(() => {
                window.location.href = '/login'
            }, 500);


            console.log(response);
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
