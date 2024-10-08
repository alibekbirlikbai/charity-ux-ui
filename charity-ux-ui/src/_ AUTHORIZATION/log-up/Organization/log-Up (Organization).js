import React from 'react'

import '../../(general)/css (general)/authorization (general).css';
import '../../(general)/css (general)/login&logup.css';
import '../../(general)/css (general)/logup.css';
import './css/log-Up (Organization).css';

import img_logo from '../../(general)/img (general)/logo.png';
import icon_arrow_left from '../../(general)/img (general)/arrow-left.png';

export default function Logup_Organization () {
  return (
    <div class="wrapper   auth   login_logup   logup" id='logup_organization'>
        <div class="HEADER">
            <div class="logo__container">
                <img class="logo-img" src={img_logo} alt=""/>
            </div>

            <div class="signAs-box">
                <div class="left-arrow-img">
                    <img src={icon_arrow_left} alt=""/>
                </div>
                
                <a class="link-signAs" href="/signAs">Sign As</a>
            </div>
        </div>
    
    
    
    
        <div class="MAIN">
            <div class="container">
    
                <div class="container__search"></div>
    
                <div class="container__main">
                    
                    <div class="container__titles">
                        <div>
                            <a href="/auth/login/organization">Log in</a>
                        </div>

                        <div class="active">
                            <a href="">Log up</a>
                        </div>
                    </div>

                    <div class="content">
                        <div class="content__title">
                            <p>
                                <b>As Organization</b>
                            </p>
                        </div>
                
                        <div class="content__body">        
                            <form  class="sending__form" action="">
                                <div class="input-container">
                                    <div class="input-box flex-2-row">
                                        <label for="organizationName">Organization Name</label>
                                        <input type="text" name="organizationName" id="organizationName" placeholder="Enter the name of your organization"/>
                                    </div>

                                    <div class="input-box flex-2-row">
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email" placeholder="example@gmail.com"/>
                                    </div>
    
                                    <div class="input-box flex-2-row">
                                        <label for="password">Password</label>
                                        <input type="text" name="password" id="password" placeholder="at least 8 characters"/>
                                    </div>
                                </div>

                                 <div class="button-box flex-2-row">
                                    <button class="button-logUp">
                                        <a href="/Organization mode/Dashboard_Page_DonationList (main)/(Dashboard) HOME_Page_DonationList (main).html">LOG UP</a>
                                    </button>

                                    {/* <!-- <p class="button-text">Forgot your password?</p> --> */}
                                </div>
                            </form>
                

                           
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
    
    
        
        <div class="FOOTER">
            <div class="copyright__container">
                <p class="copyright-text">© 2023 QaiyrAmanat</p>
            </div>
        </div>
    </div>
  )
}
