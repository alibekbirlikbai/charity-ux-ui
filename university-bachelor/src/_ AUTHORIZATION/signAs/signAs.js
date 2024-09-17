import React from 'react'

import '../(general)/css (general)/authorization (general).css'
import './css/signAs.css'

import img_logo from '../(general)/img (general)/logo.png';

export default function signAs() {
  return (
    <div class="wrapper   auth" id="signAs">
        <div class="HEADER">
            <div class="logo__container">
                <img class="logo-img" src={img_logo} alt=""/>
            </div>
        </div>


        <div class="MAIN">
            <div class="container">

                <div class="container__search"></div>

                <div class="container__main">
                    
                    <div class="content">
                        <div class="content__title">
                            <p>
                                <b>Sign As</b>
                            </p>
                        </div>
        
                        <hr/>
        
                        <div class="content__body">
                            <button class="userType-selection-button">
                                <a href="">Guest</a>
                            </button>
        
                            <div class="flex-2-column">
                                <button class="userType-selection-button">
                                    <a href="/auth/login/user">Donor</a>
                                </button>
                                <button class="userType-selection-button">
                                    <a href="/auth/login/volunteer">Volunteer</a>
                                </button>
                            </div>
        
                            <p class="content-additional-text">or</p>
        
                            <button class="userType-selection-button">
                                <a href="/auth/login/organization">Organization</a>
                            </button>
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
