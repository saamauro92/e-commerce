import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function SigninScreen(props) {


    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');


    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const userSignin = useSelector(state => state.userSignIn);
    const {userInfo, loading, error} = userSignin;


const dispatch = useDispatch();
const submithandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

}
useEffect(()=> {
    if(userInfo) {
        props.history.push(redirect);
    }

}, [props.history, redirect, userInfo])

    return (
        <div>
            <form className="form" onSubmit={submithandler} >

                <div>
                    <h1>Sign In</h1>
                </div>
                { loading && <LoadingBox></LoadingBox> }
                { error && <MessageBox variant="danger" >{error}</MessageBox> }

            <div>
                <label htmlFor="email"> Email address</label>
                <input type="email" id="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)}/>

            </div>
            <div>
                <label htmlFor="password"> Password </label>
                <input type="password" id="password" placeholder="Enter password" required onChange={e => setPassword(e.target.value)}/>

            </div>
            <div>
                <label></label>
                <button className="primary" type="submit"> Sign In</button>
            </div>
            <div>
                <label ></label>
               <div>
                   New Customer? {' '}
                   <Link to={`/register?redirect=${redirect}`}>  Create your account
            </Link>
                   </div> 
            </div>
            </form>
            
        </div>
    )
}

export default SigninScreen
