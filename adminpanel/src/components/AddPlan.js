import React from 'react'
import 'antd/dist/antd.css';
import { Col, Input, Row, Form } from 'antd';
import { useDispatch} from 'react-redux';
import { AddPlans } from '../redux/actions/plansAction';
import './Plan.css';
import NavBar from './NavBar';

const AddPlan = () => {

    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(AddPlans(values))
        console.log('Plan', values);
    }
    return (
        <div className="plan">
            <NavBar />
            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24}  >
                    <div className="bs1 container">
                        <Form layout='vertical' onFinish={onFinish}>

                            <h1>Add Plan</h1>
                            <hr />

                            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="monthly_price" label="Monthly Price" rules={[{ required: true }]}>
                                <Input type= 'number' />
                            </Form.Item>

                            <Form.Item name="yearly_price" label="Yearly Price" rules={[{ required: true }]}>
                                <Input type= 'number' />
                            </Form.Item>

                            <Form.Item name="desc" label="Description" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="benefit1" label="Benefit 1" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="benefit2" label="Benefit 2" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="benefit3" label="Benefit 3" rules={[{ required: true }]}>
                                <Input />
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

export default AddPlan
