import React from 'react'

import '../../(general)/css (general)/authorization (general).css';
import '../../(general)/css (general)/login&logup.css';
import '../../(general)/css (general)/login.css';
import './css/log-In (Volunteer).css';

import img_logo from '../../(general)/img (general)/logo.png';
import icon_arrow_left from '../../(general)/img (general)/arrow-left.png';

export default function Login_Volunteer () {
  return (
    <div class="wrapper   auth   login_logup   login" id='login_volunteer'>
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
                        <div class="active">
                            <a href="">Log in</a>
                        </div>

                        <div>
                            <a href="/auth/logup/volunteer">Log up</a>
                        </div>
                    </div>

                    <div class="content">
                        <div class="content__title">
                            <p>
                                <b>As Volunteer</b>
                            </p>
                        </div>
                
                        <div class="content__body">        
                            <form  class="sending__form" action="">
                                <div class="input-container">
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
                                    <button class="button-logIn">
                                        <a href="/volunteer/home/donation-list">LOG IN</a>
                                    </button>

                                    <a class="button-text" href="">Forgot your password?</a>
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
