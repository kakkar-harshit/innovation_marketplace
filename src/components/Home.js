import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import '../styles/homeStyles.css'


import RegisterHook from './RegisterHook'
import LoginHook from './LoginHook'
import ForgotHook from './ForgotHook'

import SwitchRound from './SwitchRound'

function Home() {
    return (<Router>

        <div>
      <div class="container main-box">
        <div class="row my-nav">
          <div class="col-md-12 option-box">

          <div className="navbar">
                        <div className="header-left">
                            <div class="arrow"></div>
                            <a href="#">Back to Home</a>
                        </div>

                        <div className="header-right">
                                 Member Login <SwitchRound/> <label>New User - Sign Up</label> 
                            
                        </div>
                    </div>

          </div>
        </div>
        <div class="row inner-box">
        {/* <RegisterHook/> */}
        {/* <LoginHook/> */}
        <Route path='/home/register' component={RegisterHook}/>
        <Route path='/home/login' component={LoginHook}/>
        <Router path='/home/forgot' component={ForgotHook}/>
        {/* <Route path='/home/forgot' component={ForgotHook}/> */}
        
        
        </div>
      </div>
    </div>
   
    </Router>)

}

export default Home;
