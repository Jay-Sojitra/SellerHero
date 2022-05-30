import React from 'react'
import 'antd/dist/antd.css';
import { Col, Input, Row, Form } from 'antd';
import { useDispatch} from 'react-redux';
import { AddFaqs } from '../redux/actions/FaqsActions';
import './Plan.css';
import NavBar from './NavBar';

const AddFaq = () => {

    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(AddFaqs(values))
        console.log('faqs', values);
    }
    return (
        <div className="faq">
            <NavBar />
            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24}  >
                    <div className="bs1 container">
                        <Form layout='vertical' onFinish={onFinish}>

                            <h1>Add Faq</h1>
                            <hr />

                            <Form.Item name="que" label="Question" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="ans" label="Answer" rules={[{ required: true }]}>
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

export default AddFaq
