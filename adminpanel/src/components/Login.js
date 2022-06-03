import React from 'react'
import 'antd/dist/antd.css';
import { Col, Input, Row, Form } from 'antd';
import { useDispatch } from 'react-redux';
import './login.css';
import NavBar from './NavBar';
import { userLogin } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(userLogin(values))
        console.log('admin', values);
    }
    return (
        <div className="plan">
            <NavBar />
            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24}  >
                    <div className="bs1 container">
                        <Form layout='vertical' onFinish={onFinish}>

                            <h1>Login</h1>
                            <hr />

                            <Form.Item name="username" label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                                <Input type='password' />
                            </Form.Item>

                            <div className='text-right'>

                                <button className="btn1">Submit</button>

                            </div>
                            <hr />
                            <Link to='/register'>Click here to Register</Link>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login
