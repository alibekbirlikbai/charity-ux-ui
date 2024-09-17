import React from 'react'

import '../(general)/css (general)/user (general).css';
import './css/(selected) SearchPage.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

import img_charity from '../(general)/img (general)/charity-img.jpg';


export default function User_Search_Page() {
  return (
    <div class="wrapper   user_mode" id='search_Page'>
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
                        <a href="/user/home">home</a>{'>'}<b>search</b>
                    </div>
                </div>
            
                <div class="container__main   min_width   center_div">
                    <div class="content">
                        <div class="category-flex-box">
                            {/* <!-- 1 row --> */}
                            <a href="/user/charity-profile">
                                <div class="charity-box">
                                        <img src={img_charity} class="charity-img" alt=""/>

                                        <div class="charity-content-box">
                                            <div class="charity-content">
                                                <div class="charity-content-title">
                                                    <p>Organization Name:</p>
                                                </div>
        
                                                <div class="charity-content-text">
                                                    <p id="charity_name">HelpPeople Charity</p>
                                                </div>
                                            </div>

                                            <div class="charity-content">
                                                <div class="charity-content-title">
                                                    <p>Category:</p>
                                                </div>
        
                                                <div class="charity-content-text">
                                                    <p>Community Development Charities, Food Distribution, Family Support Charities</p>
                                                </div>
                                            </div>

                                            <div class="charity-content">
                                                <div class="charity-content-title">
                                                    <p>Donation Form:</p>
                                                </div>
        
                                                <div class="charity-content-text">
                                                    <p>Clothes, Food, Social support</p>
                                                </div>
                                            </div>

                                            <div class="charity-content">
                                                <div class="charity-content-title">
                                                    <p>Description</p>
                                                </div>
        
                                                <div class="charity-content-text">
                                                    <p>Our Charitable Organization is engaged in community development, support for low-income families and food distribution...</p>
                                                </div>
                                            </div>
                                        </div>
                            
                                </div>
                            </a>    

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
