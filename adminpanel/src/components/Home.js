import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../redux/actions/userActions';
import { getAllSubscribers } from '../redux/actions/subscriberAction';
import './Home.css';
import Spinner from './Spinner';




const Home = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.usersReducer)
    const { subscribers } = useSelector(state => state.subscribersReducer)
    const { loading } = useSelector(state => state.alertsReducer)

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    useEffect(() => {
        dispatch(getAllSubscribers());
    }, []);

    return (
        <div>
            <NavBar />
            {loading === true && (<Spinner />)}
            <div className='row'>
                <div className="column">
                    <div className="card bs1">
                        <h1 className='title1'>Users List</h1>
                        {users.map(user => {
                            return (
                                <div>
                                    <hr />
                                    {/* <Title level={5}>{user.username}</Title> */}
                                    <p className='title2'> {user.username}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="column">
                    <div className="card bs1">
                        <h1 className='title1'>Subscribers List</h1>
                        {subscribers.map(subscriber => {
                            return (
                                <div>
                                    <hr />
                                    <p className='title2'>  {subscriber.email}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
