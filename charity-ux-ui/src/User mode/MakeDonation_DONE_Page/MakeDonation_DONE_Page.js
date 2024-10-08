import React from 'react'

import '../(general)/css (general)/user (general).css';
import './css/MakeDonation_DONE_Page.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*MakeDonation_Done_Page icons*/
import icon_done from './img/done-icon.png';


export default function User_MakeDonation_DONE_Page() {
  return (
    <div class="wrapper   user_mode" id='makeDonation_DONE_Page'>
        <div className="HEADER">
            <div className="container__header   min_width">
                <div className="logo__container">
                    <a href="/user/home" className="logo-link">
                        <img className="logo-img" src={img_logo} alt="" target="_blank"/>
                    </a>
                </div>
    
                <div className="links__container">
                    <a href="/user/my-donations/not-respond">My Donations</a>
                    <a href="/user/help">Help</a>
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

                <div class="url-and-container__main   min_width   center_div">
                    <div class="page-url">
                        <p>
                            <a href="/user/make-donation">makeDonation</a>{'>'}<b>Done</b>
                        </p>
                    </div>
                </div>    
                
                <div class="container__main   min_width   center_div">
                    <div class="content">
                        <div class="content__title">
                            <p>MakeDonation (Done)</p>
                        </div>
                
                        <div class="content__body">
                            <img src={icon_done} alt=""/> 
                            
                            <div>
                                <p>Your Donation has been successfully uploaded to the system</p>

                                <p>Please wait for a response from the organization</p>    
                            </div>
                            
                            <div class="backToHome-button-box">
                                <button class="backToHome-button">
                                    <a href="/user/home">Go back to Home page</a>
                                </button>
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

