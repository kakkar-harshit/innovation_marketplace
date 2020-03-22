import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import '../styles/forms.css'
import '../styles/homeStyles.css'
import mailicon from '../styles/assets/mail.png'
import padlock from '../styles/assets/padlock.png'
import ques from '../styles/assets/questionmark.png'

const ForgotHook = () => {

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        // event.preventDefault()
        console.log(values)

        axios.post('http://192.168.74.75:8080/forgot', values)
            .then(response => {
                console.log(response)
                alert("Registered")
            })
            .catch(error => {
                console.log(error)

            })
    }




    return (
        <>
            <div class="col-md-6 img-box"><div className="logo-forgot"><img className="questionmark" src={ques} alt="ques" /></div></div>
            <div class="col-md-6 fbox">
                <div className="formBox">

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <div class="grid-container">
                                <div class="heading">Forgot Password?</div>
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
                                    placeholder="OTP"
                                    name="password"
                                    ref={register({
                                        required: true,
                                        minLength: 6,

                                    })} /></div>

                            </div>








                            <div>
                                <button type="submit" className="button-box ">Submit</button>
                            </div>

                        </form>



                    </div>


                </div>
            </div>



        </>

    )


}

export default ForgotHook;
