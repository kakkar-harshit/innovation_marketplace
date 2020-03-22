import React from 'react'
import { useForm } from 'react-hook-form'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/forms.css'
import '../styles/homeStyles.css'
import mailicon from '../styles/assets/mail.png'
import padlock from '../styles/assets/padlock.png'
import ForgotHook from '../components/ForgotHook'

const LoginHook = () => {

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        // event.preventDefault()
        console.log(values)

        axios.post('http://192.168.74.75:8080/authenticate', values)
            .then(response => {
                console.log(response)
                console.log(response.data.token)
                alert(response.data.token)

            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <>
            <div class="col-md-6 img-box"><div className="logo"></div></div>
            <div class="col-md-6 fbox">
                <div className="formBox">

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <div class="grid-container">
                                <div class="heading">Sign In</div>
                                <div class="line"></div>
                                <div class="maili"><img src={mailicon} alt="mail logo" /></div>
                                <div class="mailb"><input type="text"
                                    className="input-box"
                                    placeholder="Username"
                                    name="username"
                                    ref={register({
                                        required: true,
                                        minLength: 7,
                                        maxLength: 7
                                    })} /></div>
                                <div class="padi"><img src={padlock} alt="pad logo" /></div>
                                <div class="line2"></div>
                                <div class="passb"><input type="password"
                                    className="input-box"
                                    placeholder="Password"
                                    name="password"
                                    ref={register({
                                        required: true,
                                        minLength: 8,

                                    })} /></div>

                            </div>


                            <div class="lt-grid-container">
                                <div class="check"><input type="checkbox" />Remember me</div>
                                <div class="line3"><Link to="/home/forgot">Forgot Password</Link></div>
                            </div>





                            <div>
                                <button type="submit" className="button-box signin">Sign In</button>
                            </div>

                        </form>



                    </div>


                </div>
            </div>



        </>

    )


}

export default LoginHook;
