import React, { useEffect, useState } from "react";
import jpg1 from './photos/2.png';
import jpg2 from './photos/4.png';
import jpg3 from './photos/1.png';
import jpg4 from './photos/5.jpg';
import jpg5 from './photos/6.png';
import jpg6 from './photos/7.png';
import jpg7 from './photos/8.png';
import jpg8 from './photos/9.png';
import jpg9 from './photos/10.png';
import jpg10 from './photos/11.png';
import jpg11 from './photos/12.png';
import { useDispatch, useSelector } from "react-redux";
import { getAllPlans } from "./redux/actions/plansAction";
import { getAllFaqs } from "./redux/actions/faqsAction";
import { userSubscription } from "./redux/actions/subscriberAction";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const { plans } = useSelector(state => state.plansReducer);
    const { faqs } = useSelector(state => state.faqsReducer);

    useEffect(() => {
        dispatch(getAllFaqs());
    }, []);
    useEffect(() => {
        dispatch(getAllPlans());
    }, []);

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(userSubscription(email));
    }
    return (
        <div>
            <NavBar />
            <div>
                <img src={jpg1} alt='jpg1' className='jpg1' />
                <img src={jpg2} alt='jpg2' className='jpg2' />
                <img src={jpg3} alt='jpg3' className='jpg3' />
                <p className='p1'>Deliver fast and empathetic customer service right from Gmail without having to learn and adapt to another tool</p>
            </div>
            <input className='i1' placeholder="Enter business Name" />
            <img className='jpg4' src={jpg4} alt='jpg4' />
            <img className='jpg5' src={jpg5} alt='jpg5' />
            <p className='p2'>Product Featuring section</p>
            <img className='jpg7' src={jpg7} alt='jpg7' />
            <img className='jpg6' src={jpg6} alt='jpg6' />
            <p className='p3'>Create accountability with email ownership and status</p>
            <p className='p4'>Hiver makes sure every email coming to your customer service email address has a clear status. You can assign emails to team members, ensuring clear accountability and timely responses to your customers.</p>
            <p className='p5'>Delegate emails with ease </p>
            <img className='jpg9' src={jpg9} alt='jpg9' />
            <img className='jpg8' src={jpg8} alt='jpg8' />

            <p className='p6'>Collaborate on support emails. No CCs required</p>
            <p className='p7'>Hiver helps you collaborate seamlessly with your team by helping you keep internal and external conversations clearly separated, yet in context. Write notes to teammates to have quick discussions that will continue to live next to emails and provide future context.</p>
            <p className="p8">Have contextual discussions</p>
            <img className='jpg11' src={jpg7} alt='jpg7' />
            <img className='jpg10' src={jpg6} alt='jpg6' />
            <p className='p9'>Automate repetitive tasks. Focus on customer happiness.</p>
            <p className='p10'>Remove the grunt work out of customer service. Automate repetitive tasks that eat away your team’s productivity. Auto-assign emails based on predefined rules, distribute workload with round-robin assignment, focus on what’s truly important.</p>
            <p className='p11'>Assign emails automatically</p>
            <p className='p12'>Improve customer support and
                team performance with analytics</p>
            <p className='p13'>Improve your customer service with insights into workload distribution, SLA violations and team performance. Build custom reports to measure metrics specific to your business. Find out what your customers think through customer satisfaction ratings.</p>
            <p className='p14'>Have contextual discussions</p>
            <img className='jpg13' src={jpg9} alt='jpg9' />
            <img className='jpg12' src={jpg8} alt='jpg8' />
            <p className='p15'>Choose the <span className='s1'>Best plan</span> to scale your customer service</p>
            <p className='p16'>14-day free trial | No credit card required</p>

            <span className='s2'>
                <button className='bt1'>Yearly</button>
                <button className='bt2'>Monthly</button>
            </span>
            <div >
                {plans.map(plan => {
                    return (

                        <div className="columns">
                            <ul className="price">
                                <li className="header">{plan.name}</li>
                                <p className='plandesc'><b>{plan.desc}</b></p>
                                <li className="grey">$ {plan.yearly_price}/ year</li>
                                <li>{plan.benefit1}</li>
                                <li>{plan.benefit2}</li>
                                <li>{plan.benefit3}</li>

                                <li className="grey"><a href="#" className="button">Start your free trial</a></li>
                            </ul>

                        </div>
                    )
                })}
            </div>
            <p className='p17'> Frequently Asked <span className='s1'>Question</span></p>
            <img className='jpg14' src={jpg10} alt='jpg14' />
            <div className="faqs">
                {faqs.map(faq => {
                    return (
                        <div className="p18">

                            <h2 className="s1">{faq.que}</h2>
                            <h4>{faq.ans}</h4>
                            <br />
                        </div>
                    )
                })}
            </div>
            <h2 className='join'><span className='s1'>Join</span> Us</h2>
            <p className='p19'>Join and <span className='s1'>Subscribe</span> to our Newsletter the 8000+ teams</p>
            <img className='jpg15' src={jpg11} alt='jpg15' />
            <p className='p20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <form className='form' >
                <input
                    className='input'
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bt3" onClick={clickHandler} >Subscribe</button>
            </form>

        <Footer />
        </div >

    )
}

export default Home
