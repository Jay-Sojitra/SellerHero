import React from 'react';
import 'antd/dist/antd.css';
import { Col, Input, Row, Form } from 'antd';
import { userLogin } from './redux/actions/userAction';
import { useDispatch } from 'react-redux';



function Login() {

    
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(userLogin(values));
        console.log(values);
        // window.location.href = '/'
    }
    return (

        <div className="login">

            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24}  >
                    <div className="bs1 container">
                        <Form layout='vertical' onFinish={onFinish}>

                            <h1>Login Form</h1>
                            <hr />

                            <Form.Item name="username" label="name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
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
