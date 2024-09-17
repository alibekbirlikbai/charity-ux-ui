import React from 'react'

import '../../(general)/css (general)/authorization (general).css';
import '../../(general)/css (general)/login&logup.css';
import '../../(general)/css (general)/logup.css';
import './css/log-Up (User).css';

import img_logo from '../../(general)/img (general)/logo.png';
import icon_arrow_left from '../../(general)/img (general)/arrow-left.png';

export default function Logup_User () {
  return (
    <div class="wrapper   auth   login_logup   logup" id='logup_user'>
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
                            <a href="/auth/login/user">Log in</a>
                        </div>

                        <div class="active">
                            <a href="">Log up</a>
                        </div>
                    </div>

                    <div class="content">
                        <div class="content__title">
                            <p>
                                <b>As Donor</b>
                            </p>
                        </div>
                
                        <div class="content__body">        
                            <form  class="sending__form" action="">
                                <div class="input-container">
                                    <div class="input-box flex-2-row">
                                        <label for="firstName">First Name</label>
                                        <input type="text" name="firstName" id="firstName" placeholder="Enter your first name"/>
                                    </div>

                                    <div class="input-box flex-2-row">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name"/>
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
                                        <a href="/user/home">LOG UP</a>
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
