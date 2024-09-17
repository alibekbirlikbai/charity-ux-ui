import React from 'react'

import '../(general)/css (general)/user (general).css';
import './css/(selected) CharityPage.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

import img_charity from '../(general)/img (general)/charity-img.jpg';

/*Charity_Profile_Page icons*/
import img_socialHub_website from './img/website_sign.png';
import img_socialHub_instagram from './img/instagram_sign.png';
import img_socialHub_whatsapp from './img/whatsapp_sign.png';
import img_socialHub_telegram from './img/telegram_sign.png';


export default function User_Charity_Page() {
  return (
    <div class="wrapper   user_mode" id='charityProfile_Page'>
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
                            <a href="/user/home" class="anchor_attributes_reset">home</a>{'>'}<a href="" class="anchor_attributes_reset">search/category</a>{'>'}<b>charityProfile</b>
                        </p>
                    </div>
                </div>

            
                
                <div class="container__main   min_width   center_div">
                    <div class="content">
                        <div class="content__title">
                            <p>HelpPeople Charity</p>
                        </div>
                
                        <div class="content__body">
                            <div class="charity-profile_flex-box">
                                <div class="charity-profile_box" id="short_info">
                                    <img src={img_charity} class="charity-profile-img" alt=""/>
    
                                    <div class="charity-content-box">
                                        <div class="charity-content">
                                            <div class="charity-content-title">
                                                <p>Organization Name:</p>
                                            </div>
    
                                            <div class="charity-content-text">
                                                <p class="text_underline">HelpPeople Charity</p>
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
                                
                                <hr/>

                                <div class="charity-profile_box" id="about_us">
                                    <div class="box-title">
                                        <h2>About Us</h2>
                                    </div>

                                    <div class="box-content">
                                        <p class="content-FULL-about-organization">
                                            <b>(Something about organization...)</b> 
                                            <br/>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quasi incidunt rem fugiat vero totam sunt, similique voluptatem consequuntur iste explicabo laborum in. Corrupti, iure. Sint velit totam beatae, iste eius cum corrupti esse assumenda explicabo commodi vero qui ut praesentium, est, quo aperiam exercitationem? Minima laudantium tempora ad!
                                        </p>
                                    </div>
                                </div>

                                <hr/>

                                <div class="charity-profile_box" id="who_do_we_help">
                                    <div class="box-title">
                                        <h2>Who do we Help?</h2>
                                    </div>

                                    <div class="box-content">
                                        <div class="organization-box">
                                            <div class="organization-img"></div>

                                            <p class="organization-title">“Solnyshko”, Orphanage</p>
                                        </div>

                                        <div class="organization-box">
                                            <div class="organization-img"></div>

                                            <p class="organization-title">“Ayala”, 
                                                Boarding school for disabled children</p>
                                        </div>

                                        <div class="organization-box">
                                            <div class="organization-img"></div>

                                            <p class="organization-title">“Pana”, 
                                                Center for Social Adaptation of Almaty</p>
                                        </div>

                                        <div class="organization-box">
                                            <div class="organization-img"></div>

                                            <p class="organization-title">“Dos”, 
                                                Animal Shelter</p>
                                        </div>  
                                                                              
                                    </div>
                                </div>

                                <hr/>

                                <div class="charity-profile_box" id="social_hub">
                                    <div class="box-title">
                                        <h2>Social Hub</h2>
                                    </div>

                                    <div class="box-content">
                                        <a href="">
                                            <div class="socialMedia-box square">
                                                <img src={img_socialHub_website} class="socialMedia-img" alt=""/>
    
                                                <p class="socialMedia-title">Website</p>
                                            </div>
                                        </a>

                                        <a href="">
                                            <div class="socialMedia-box">
                                                <img src={img_socialHub_instagram} class="socialMedia-img" alt=""/>
    
                                                <p class="socialMedia-title">Instagram</p>
                                            </div>
                                        </a>
                                        

                                        <a href="">
                                            <div class="socialMedia-box">
                                                <img src={img_socialHub_whatsapp} class="socialMedia-img" alt=""/>
    
                                                <p class="socialMedia-title">Whatsapp</p>
                                            </div>
                                        </a>

                                        <a href="">
                                            <div class="socialMedia-box">
                                                <img src={img_socialHub_telegram} class="socialMedia-img" alt=""/>
    
                                                <p class="socialMedia-title">Telegram</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <hr/>

                                <div class="charity-profile_box" id="button">
                                    <div class="box-content">
                                        <button class="makeDonation_to_THAT_charity-button">
                                            <a href="/user/make-donation">Make Donation to that Organization</a>
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
