

import React from 'react'

import '../(general)/css (general)/user (general).css';
import './css/Help_Page.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*Help_Page icons*/
import icon_direction_right from './img/direction_right-icon.png';
import icon_minus_sign from './img/minus_sign-icon.png';
import icon_plus_sign from './img/plus_sign-icon.png';

export default function User_Help_Page() {
  return (
    <div class="wrapper   user_mode" id='help_Page'>
        <div className="HEADER">
            <div className="container__header   min_width">
                <div className="logo__container">
                    <a href="/user/home" className="logo-link">
                        <img className="logo-img" src={img_logo} alt="" target="_blank"/>
                    </a>
                </div>
    
                <div className="links__container">
                    <a href="/user/my-donations/not-respond">My Donations</a>
                    <a href="/user/help" className="active">Help</a>
                    <a href="/user/profile">Profile</a>
                </div>
    
                <div className="button__container">
                    <button className="makeDonation-button">
                        <a href="/user/make-donation">Make Donation</a>
                    </button>
                </div>
            </div>
        </div>




        <div class="MAIN">
            <div class="container">
                <div className="container__search   min_width   center_div">
                    <div className="search-main-content">
                        <div className="search-text-box">
                            <img src={icon_search} className="search-img" alt=""/>
    
                            <input type="text" placeholder="search for organization..." value="HelpPeople Charity"/>
                        </div>
    
                        <div className="vertical-hr"></div>
    
                        <div className="search-location-box">
                            <img src={icon_location} className="location-img" alt=""/>
    
                            <p>All country</p>
                        </div>
                    </div>

                    <div className="search-additional-content">
                        <button className="search-button">
                            <a href="/user/search">Search</a>
                        </button>
                    </div>
                </div>


                <hr/> 
                
                <div class="container__main   min_width   center_div">
                    <div class="content">
                        <div class="content__title">
                            <p>Help</p>
                        </div>
                
                        <div class="content__body">
                            {/* <!-- _1 Content-box --> */}
                            <div class="content-box">
                                <div class="box-title">
                                    <p>How it works?</p>
                                </div>

                                <div class="box-content">
                                    <div class="box-item">
                                        <span>1.</span>
                                        <p>Register to Platform</p>
                                    </div>

                                    <img src={icon_direction_right} alt=""/>

                                    <div class="box-item">
                                        <span>2.</span>
                                        <p>Fill the Donation info</p>
                                    </div>
                                    
                                    <img src={icon_direction_right} alt=""/>

                                    <div class="box-item">
                                        <span>3.</span>
                                        <p>Make Donation</p>
                                    </div>
                                </div>
                            </div> 

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


        
        
        <div class="FOOTER">
            <div class="copyright__container">
                <p class="copyright-text">© 2023 QaiyrAmanat</p>
            </div>
        </div>
    </div>
  )
}
