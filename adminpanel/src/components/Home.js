import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../redux/actions/userActions';
import { getAllSubscribers } from '../redux/actions/subscriberAction';
import './Home.css';


const Home = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.usersReducer)
    const { subscribers } = useSelector(state => state.subscribersReducer)

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    useEffect(() => {
        dispatch(getAllSubscribers());
    }, []);

    return (
        <div>
            <NavBar />
            <div className='row'>
                <div className="column">
                    <div className="card">
                        <h1>Users List</h1>
                        {users.map(user => {
                            return (
                                <div>
                                    <p> {user.username}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h1>Subscribers List</h1>
                        {subscribers.map(subscriber => {
                            return (
                                <div>
                                    <p> {subscriber.email}</p>
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
