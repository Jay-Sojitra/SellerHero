import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Col, Input, Row, Form, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editPlan, getAllPlans } from '../redux/actions/plansAction';
import './Plan.css';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
const { TextArea } = Input;

const EditPlan = () => {

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const { planid } = useParams()
    const dispatch = useDispatch()

    const [plan, setPlan] = useState({})
    const [totalplans, setTotalplans] = useState([]);
    const { plans } = useSelector(state => state.plansReducer)

    useEffect(() => {

        if (plans.length === 0) {
            dispatch(getAllPlans())
        }

        else {
            setTotalplans(plans)
            setPlan(plans.find(plan => plan._id === planid))
        }
    }, [plans])

    function onFinish(values) {

        values._id = plan._id
        dispatch(editPlan(values))
        console.log(values)
    }
    return (
        <div className="plan">
            <NavBar />
            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24}  >
                    <div className="bs1 container">
                        {totalplans.length > 0 && (
                            <Form layout='vertical' initialValues={plan} onFinish={onFinish}>

                                <h1>Edit Plan</h1>
                                <hr />

                                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item name="monthly_price" label="Monthly Price" rules={[{ required: true, message: 'Only required Numbers and Greater Than Zero' }]}>
                                    <InputNumber min={1} value={value1} onChange={setValue1} style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item name="yearly_price" label="Yearly Price" rules={[{ required: true, message: 'Only required Numbers and Greater Than Zero' }]}>
                                    <InputNumber min={1} value={value} onChange={setValue} style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item name="desc" label="Description" rules={[{ required: true }]}>
                                    <TextArea rows={4} />
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

                        )}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default EditPlan
