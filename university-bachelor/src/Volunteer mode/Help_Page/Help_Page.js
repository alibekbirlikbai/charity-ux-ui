import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/volunteer (general).css";
import "./css/Help_Page.css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

/*__Help_Page icons__*/
import icon_minus_sign from './img/minus_sign-icon.png';
import icon_plus_sign from './img/plus_sign-icon.png';


export default function Volunteer_Help_Page() {
  return (
    <div class="wrapper  volunteer_mode" id="help_Page">
        <div class="SIDEBAR">
            <div class="sidebar__container">
                {/* <!-- Logo --> */}
                <div class="logo__container">
                    <a href="/volunteer/home/donation-list" class="logo-link">
                        <img class="logo-img" src={img_logo} alt="" target="_blank"/>
                    </a>
                </div>

                <div class="content">
                    {/* <!-- Menu --> */}
                    <div class="menu__container">
                        <div class="menu-item">
                            <a href="/volunteer/home/donation-list">Dashboard</a>
                        </div>

                        <div class="menu-item">
                            <a href="/volunteer/deliveries/respond">Deliveries</a>
                        </div>
                    </div>

                    {/* <!-- Footer --> */}
                    <div class="footer__container">
                        <div class="copyright__container">
                            <p class="copyright-text">© 2023 QaiyrAmanat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        







        

        <div class="MAIN">
            <div class="container">
                <div class="container__additional_menu">
                    <a href="/volunteer/help" class="active">Help</a>

                    <a href="/volunteer/profile">Profile</a>
                </div>

                
                <div class="container__main">
                    <div class="content">
                        
                        <div class="content__body">                            
                            <div class="content__title">
                                <p>Help</p>
                            </div>
                            
                            <div class="content__body-flex-box">    
                                
                                {/* <!-- _2 Content-box --> */}
                                <div class="content-box">
                                    <div class="box-title">
                                        <p>Frequently Asked Questions (FAQ)</p>
                                    </div>

                                    <div class="box-content">
                                        {/* <!-- #1 Box_Item --> */}
                                        <div class="box-item">
                                            <div class="item-title">
                                                <p>1. How to make Donation?</p>
                                                
                                                <img src={icon_minus_sign} alt=""/>
                                            </div>

                                            <div class="item-content">
                                                <p>Answer to question...</p>
                                            </div>
                                        </div>

                                        {/* <!-- #2 Box_Item --> */}
                                        <div class="box-item  item-hide">
                                            <div class="item-title">
                                                <p>2. How to Donate to a Specific Charity?</p>
                                                
                                                <img src={icon_plus_sign} alt=""/>
                                            </div>

                                            <div class="item-content">
                                                
                                            </div>
                                        </div>

                                        {/* <!-- #3 Box_Item --> */}
                                        <div class="box-item  item-hide">
                                            <div class="item-title">
                                                <p>...</p>
                                                
                                                <img src={icon_plus_sign} alt=""/>
                                            </div>

                                            <div class="item-content">
                                                
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div> 

                            </div>

                        </div>
                    </div>
                </div>
            

            </div>

        </div>

    </div>
  )
}