import React from 'react';
import 'antd/dist/antd.css';
import { Col, Input, Row, Form, message } from 'antd';
import { userRegister } from './redux/actions/userAction';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogin } from '../redux/actions/userAction';
// import Spinner from '../components/Spinner';


function Login() {

    // const { loading } = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch()
    const onFinish = (values) => {

        if (values.password === values.cpassword) {
            dispatch(userRegister(values))
            console.log(values)
            // window.location.href= '/'
        }
        else {
            message.error('please check your password')
        }
       

    }
    return (

        <div className="login">
            {/* {loading} */}

            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24}  >
                    <div className="bs1 container">
                        <Form layout='vertical' onFinish={onFinish}>

                            <h1>Register Form</h1>
                            <hr />

                            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                                <Input type="password"></Input>
                            </Form.Item>

                            <Form.Item name="cpassword" label="Confirm Password" rules={[{ required: true }]}>
                                <Input type="password"></Input>
                            </Form.Item>


                            <div className='text-right'>

                                <button className="btn1">Submit</button>

                            </div>

                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login
