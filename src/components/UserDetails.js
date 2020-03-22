import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/homeStyles.css'
import '../styles/userDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDetails() {





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

                        
                    </div>

          </div>
          <div class="row">
            <div class="col-md-12 userHeading">User Details</div>
          </div>
        </div>
        <div class="row inner-box">
                <div class="col container">

                <div class="row">
                <div class="col name-col">Name</div>
                </div>

                <div class="row">
                <div class="col name-in"><input type="text" placeholder="Type here"/></div>
                </div>

                <div class="row">
                <div class="col name-col">Year Experience</div>
                </div>

                <div class="row">
                <div class="col name-in"><select >
                    <option value="" disabled selected>Years</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select></div>
                <div class="col name2"><select >
                    <option value="" disabled selected>Months</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    
                    </select></div>
                </div>

                <div class="row">
                <div class="col about-col">About yourself</div>
                <div class="col"></div>
                </div>


                <div class="row">
                <div class="col about-in"><textarea rows="2" cols="60" placeholder="Type here"></textarea></div>
                </div>

                <div class="row">
                <div class="col ach-col">Achievements</div>
                <div class="col"></div>
                </div>

                <div class="row">
                <div class="col ach-in"><textarea rows="2" cols="60" placeholder="Type here"></textarea></div>
                </div>


                        
                </div>
                <div class="col container">
                <div class="row">
                <div class="col ">Skill Set</div>
                </div>
                </div>
        
        </div>
      </div>
    </div>
   
    </Router>)

}

export default UserDetails;
