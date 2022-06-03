import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Button, Card, Col, Popconfirm, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeActivity, DeletePlan, getAllActivePlans, getAllPlans } from '../redux/actions/plansAction';
import { Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './Plans.css';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const { Title } = Typography;

const Plans = () => {

    const dispatch = useDispatch();
    const { plans } = useSelector(state => state.plansReducer);
    const { activeplans } = useSelector(state => state.ActivePlansReducer);
    const { loading } = useSelector(state => state.alertsReducer)

    useEffect(() => {
        dispatch(getAllPlans());
    }, []);

    useEffect(() => {
        dispatch(getAllActivePlans());
    }, []);

    const Enable = (id) => {
        if (activeplans.length >= 3) {
            window.alert('Already 3 plan is Active');
        }
        else {
            dispatch(ChangeActivity(id, true))
        }
    }

    return (
        <div>
            <NavBar />
            {loading === true && (<Spinner />)}
            <div className='title'>
                <h1 className='title'>Plans</h1>
            </div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {plans.map(plan => {
                        return (
                            <Col span={8}>

                                <Card className='bs1'>
                                    <Title className="title">{plan.name}</Title>
                                    <hr />
                                    <Title level={4}>{plan.monthly_price}$/ month</Title>
                                    <hr />
                                    <Title level={4}>{plan.yearly_price}$/ year</Title>
                                    <hr />
                                    <Title level={4}>{plan.desc}</Title>
                                    <hr />
                                    <Title level={4}>{plan.benefit1}</Title>
                                    <hr />
                                    <Title level={4}>{plan.benefit2}</Title>
                                    <hr />
                                    <Title level={4}>{plan.benefit3}</Title>
                                    <hr />

                                    <div className="div2">
                                        <Link to={`/editplan/${plan._id}`}><EditOutlined className="edit" style={{
                                            color: 'green', cursor: 'pointer',fontSize: '160%'
                                        }} /></Link>
                                        <Popconfirm
                                            title='Are you sure you want to delete this plan'
                                            onConfirm={() => { dispatch(DeletePlan({ planid: plan._id })) }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined style={{ color: 'red', cursor: 'pointer',fontSize: '160%' }} />
                                        </Popconfirm>
                                    </div>

                                    {plan.isActive === true ?

                                        <Button onClick={() => dispatch(ChangeActivity(plan._id, false))}>Disable</Button> :

                                        <Button onClick={() => Enable(plan._id)}>Enable</Button>
                                    }

                                </Card>

                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div >
    )
}

export default Plans
