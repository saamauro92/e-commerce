import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { register, signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function RegisterScreen(props) {


    const [ email, setEmail] = useState('');
    const [ name, setName] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');
    const redirect = props.location.search ? props.location.search.split("=")[1]: '/';
    const userRegister = useSelector(state => state.userRegister);
    const {userInfo, loading, error} = userRegister;


const dispatch = useDispatch();
const submithandler = (e) => {   
    e.preventDefault();

    if(password !== confirmPassword) {
        alert('Password and confirm password are not match')
    }else{

        dispatch(register(name, email, password));
    }

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
                    <h1>Create Account </h1>
                </div>
                { loading && <LoadingBox></LoadingBox> }
                { error && <MessageBox variant="danger" >{error}</MessageBox> }

                <div>
                <label htmlFor="name">  Name</label>
                <input type="text" id="name" placeholder="Enter name" required onChange={e => setName(e.target.value)}/>

            </div>
            <div>
                <label htmlFor="email"> Email address</label>
                <input type="email" id="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)}/>

            </div>
            

            <div>
                <label htmlFor="password"> Password </label>
                <input type="password" id="password" placeholder="Enter password" required onChange={e => setPassword(e.target.value)}/>

            </div>
            <div>
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password " required onChange={e => setConfirmPassword(e.target.value)}/>

            </div>
            <div>
                <label></label>
                <button className="primary" type="submit">  Register</button>
            </div>
            <div>
                <label ></label>
               <div>
                   Already have an account ? {' '}
                   <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                   </div> 
            </div>
            </form>
            
        </div>
    )
}

export default RegisterScreen
