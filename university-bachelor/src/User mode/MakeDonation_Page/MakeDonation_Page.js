import React from 'react'

import '../(general)/css (general)/user (general).css';
import './css/MakeDonation_Page.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*Help_Page icons*/
import icon_arrow_down from './img/(makeDonation) arrow-down-icon.png';
import icon_cloud_upload from './img/cloud_upload-icon.png';


export default function User_MakeDonation_Page() {
    document.addEventListener('DOMContentLoaded', function() {
        const textarea = document.querySelector("textarea");

        textarea.addEventListener("keyup", e => {
            textarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        })
    })

  return (
    <div class="wrapper   user_mode" id='makeDonation_Page'>
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
                            
                
                <div class="container__main   min_width   center_div">
                    <div class="content">
                        <div class="content__title">
                            <p>Make Donation</p>
                        </div>
                
                        <div class="content__body">
                            <div class="makeDonation_flex-box">
                                {/* <!-- _1 MakeDonation_Box --> */}
                                <div class="makeDonation_box">
                                    <div class="box-title">
                                        <h2>Info about Donation</h2>
                                    </div>

                                    <div class="box-content">
                                        <div class="item-box" id="item-donation_form">
                                            <div class="item-title">
                                                <p>Donation Form:</p>
                                            </div>

                                            <div class="item-content">
                                                <p>Select</p>

                                                <img src={icon_arrow_down} alt=""/>
                                            </div>
                                        </div>

                                        <div class="item-box   flex-direction-column" id="item-donation">
                                            <div class="item-title">
                                                <p>Donation</p>
                                                <p>(photo, video)</p>
                                            </div>

                                            <div class="item-content">
                                                <img src={icon_cloud_upload} alt=""/>

                                                <p>Drag & Drop files here</p>
                                                
                                                <p>or</p>
                                                
                                                <div class="select-files-button-box">
                                                    <button class="select-files-button">
                                                        <a href="">Select files</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="item-box   flex-direction-column" id="item-description">
                                            <div class="item-title">
                                                <p>Description:</p>
                                            </div>

                                            <div class="item-content">
                                                <textarea rows="1" placeholder="Description of donation (what is it / condition / ...)" required></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr/>

                                {/* <!-- _2 MakeDonation_Box -->                             */}
                                <div class="makeDonation_box">
                                    <div class="box-title">
                                        <h2>Info about Donor</h2>
                                    </div>

                                    <div class="box-content">
                                        <div class="item-box" id="item-donor">
                                            <div class="item-title">
                                                <p>Donor:</p>
                                            </div>

                                            <div class="item-content">
                                                <p>Name Surname</p>

                                                <span>/</span>

                                                <p>Anonymous</p>
                                            </div>
                                        </div>

                                        <div class="item-box" id="item-contacts">
                                            <div class="item-title">
                                                <p>Contacts:</p>
                                            </div>

                                            <div class="item-content">
                                                <input type="text" placeholder="(+7) xxx xxx xx xx"  maxlength="14" required/>
                                            </div>
                                        </div>

                                        <div class="item-box" id="item-address">
                                            <div class="item-title">
                                                <p>Address:</p>
                                            </div>

                                            <div class="item-content">
                                                <input type="text" placeholder="Almaty, Almaly district" required/>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr/>

                                {/* <!-- _3 MakeDonation_Box --> */}
                                <div class="makeDonation_box" id="box-makeDonation-button">
                                    <div class="box-content">
                                        <button class="makeDonation-button">
                                            <a href="/user/make-donation/done">Make Donation</a>
                                        </button>
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

