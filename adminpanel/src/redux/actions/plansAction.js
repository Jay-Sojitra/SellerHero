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
                window.location.href = '/plans'
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

export const editPlan = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/plans/editplan', reqObj);
            message.success('Plan Edited successfully');
            console.log(response);

            setTimeout(() => {
                window.location.href = '/plans'
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

export const getAllActivePlans = () => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.get('/api/plans/getallactiveplan')
            console.log(response);
            dispatch({
                type: 'GET_ALL_ACTIVE_PLANS',
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


export const DeletePlan = (reqObj) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true

        })

        try {
            const response = await axios.post('/api/plans/deleteplan', reqObj)
            message.success('Plan deleted successfully');
            setTimeout(() => {
                window.location.reload();
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


// export const ChangeActivity = (reqObj) => {
export const ChangeActivity = (_id, isActive) => {
    return async dispatch => {

        dispatch({
            type: 'LOADING',
            payload: true
        })
        try {
            // const response = await axios.post('/api/plans/editactiveplan', reqObj)
            const response = await axios.post('/api/plans/editactiveplan', { _id, isActive });
            message.success('Plan activity changed successfully');
            setTimeout(() => {
                window.location.reload();
            }, 500);
            console.log(response);


            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
        catch (error) {
            console.log(error)
            // console.log('details',reqObj);

            message.error('Something went wrong');
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }
}
