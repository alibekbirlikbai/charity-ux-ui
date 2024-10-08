import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/organization (general).css";
import "./css/Profile_Page.css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

import img_charity from "./img/charity-img.jpg";
import icon_instagram from "./img/instagram_sign.png";
import icon_link_edit from "./img/link_edit_icon.png";
import icon_logout from "./img/logout-icon.png";
import icon_plus_sign from "./img/plus_sign-icon.png";
import icon_telegram_sign from "./img/telegram_sign.png";
import icon_website_sign from "./img/website_sign.png";
import icon_whatsapp_sign from "./img/whatsapp_sign.png";


export default function Organization_Profile_Page() {
    document.addEventListener('DOMContentLoaded', function() {
        const textarea = document.querySelector("textarea");

        textarea.addEventListener("keyup", e => {
            textarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        })
    })

  return (
    <div class="wrapper   organization_mode" id='profile_Page'>
        <div class="SIDEBAR">
            <div class="sidebar__container">
                {/* <!-- Logo --> */}
                <div class="logo__container">
                    <a href="/organization/home/donation-List" class="logo-link">
                        <img class="logo-img" src={img_logo} alt="" target="_blank"/>
                    </a>
                </div>

                <div class="content">
                    {/* <!-- Menu --> */}
                    <div class="menu__container">
                        <div class="menu-item">
                            <a href="/organization/home/donation-List">Dashboard</a>
                        </div>

                        <div class="menu-item">
                            <a href="/organization/donations/respond">Donations</a>
                        </div>

                        <div class="menu-item">
                            <a href="/organization/reports">Reports</a>
                        </div>

                        <div class="menu-item">
                            <a href="/organization/social-hub">Social Hub</a>
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
                    <a href="/organization/help">Help</a>

                    <a href="/organization/profile" class="active">Profile</a>
                </div>
  
                
                <div class="container__main">
                    <div class="content">
                        <div class="content__title">
                            <p>Profile</p>
                        </div>
                
                        <div class="content__body">
                            <div class="charity-profile_title">
                                <p>HelpPeople Charity</p>
                            </div>

                            <div class="charity-profile_flex-box">
                                <div class="charity-profile_box" id="short_info">
                                    <img src={img_charity} class="charity-profile-img" alt=""/>
    
                                    <div class="charity-content-box">
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
                                            <textarea rows="1" placeholder="About organization..." required></textarea>
                                        </p>
                                    </div>
                                </div>

                                <hr/>

                                <div class="charity-profile_box" id="who_do_we_help">
                                    <div class="box-title">
                                        <h2>Who do we Help?</h2>
                                    </div>

                                    <div class="box-content">
                                        <div class="organization-flex-box">
                                            <div class="organization-box">
                                                <div class="organization-img"></div>
    
                                                <p class="organization-title">“Solnyshko”, Orphanage</p>

                                                <div class="box-action-container">
                                                    <div class="edit-content-action">
                                                        <button class="edit-button">
                                                            <a href="">EDIT</a>
                                                        </button>
                                                    </div>
        
                                                    <div class="delete-content-action">
                                                        <button class="delete-button">
                                                            <a href="">DELETE</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="organization-box">
                                                <div class="organization-img"></div>
    
                                                <p class="organization-title">“Ayala”, 
                                                    Boarding school for disabled children</p>

                                                <div class="box-action-container">
                                                    <div class="edit-content-action">
                                                        <button class="edit-button">
                                                            <a href="">EDIT</a>
                                                        </button>
                                                    </div>
        
                                                    <div class="delete-content-action">
                                                        <button class="delete-button">
                                                            <a href="">DELETE</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="organization-box">
                                                <div class="organization-img"></div>
    
                                                <p class="organization-title">“Pana”, 
                                                    Center for Social Adaptation of Almaty</p>
                                                    
                                                <div class="box-action-container">
                                                    <div class="edit-content-action">
                                                        <button class="edit-button">
                                                            <a href="">EDIT</a>
                                                        </button>
                                                    </div>
        
                                                    <div class="delete-content-action">
                                                        <button class="delete-button">
                                                            <a href="">DELETE</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="organization-box">
                                                <div class="organization-img"></div>
    
                                                <p class="organization-title">“Dos”, 
                                                    Animal Shelter</p>

                                                <div class="box-action-container">
                                                    <div class="edit-content-action">
                                                        <button class="edit-button">
                                                            <a href="">EDIT</a>
                                                        </button>
                                                    </div>
        
                                                    <div class="delete-content-action">
                                                        <button class="delete-button">
                                                            <a href="">DELETE</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>


                                        <div class="organization-button-box">
                                            <div class="add_new_organization-box">    
                                                <a href="">
                                                    <button class="add_new_organization-box-button">
                                                        <img src={icon_plus_sign} alt=""/>
                    
                                                        <p>ADD</p>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>                                        
                                                                              
                                    </div>
                                </div>

                                <hr/>

                                <div class="charity-profile_box" id="social_hub">
                                    <div class="box-title">
                                        <h2>Social Hub</h2>
                                    </div>

                                    <div class="box-content">
                                        <div class="socialMedia-flex-box">
                                            <a href="">
                                                <div class="socialMedia-box  square">
                                                    <img src={icon_website_sign} class="socialMedia-img" alt=""/>
        
                                                    <p class="socialMedia-title">Website</p>
                                                </div>
                                            </a>
    
                                            <a href="">
                                                <div class="socialMedia-box">
                                                    <img src={icon_instagram} class="socialMedia-img" alt=""/>
        
                                                    <p class="socialMedia-title">Instagram</p>
                                                </div>
                                            </a>
                                            
    
                                            <a href="">
                                                <div class="socialMedia-box">
                                                    <img src={icon_whatsapp_sign} class="socialMedia-img" alt=""/>
        
                                                    <p class="socialMedia-title">Whatsapp</p>
                                                </div>
                                            </a>
    
                                            <a href="">
                                                <div class="socialMedia-box">
                                                    <img src={icon_telegram_sign} class="socialMedia-img" alt=""/>
        
                                                    <p class="socialMedia-title">Telegram</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="socialMedia-button-box">
                                            <div class="add_new_socialMedia-box">    
                                                <a href="/organization/social-hub">
                                                    <button class="add_new_socialMedia-box-button">
                                                        <img src={icon_link_edit} alt=""/>
                    
                                                        <p>Edit Social Hub</p>
                                                    </button>
                                                </a>
                                            </div>
                                        </div> 
                                    </div>
                                </div>

                                <hr/>

                                <div class="charity-profile_box" id="logout">
                                    <div class="box-content">
                                        <button class="logout-button">
                                            <a href="/signAs">
                                                <img src={icon_logout} alt=""/>

                                                <p>Logout</p>
                                            </a>
                                        </button>
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
    
