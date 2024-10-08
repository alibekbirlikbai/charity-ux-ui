import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/organization (general).css";
import "./css/Social-Hub_Page.css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

import icon_instagram from "./img/instagram_sign.png";
import icon_plus_sign from "./img/plus_sign-icon.png";
import icon_telegram_sign from "./img/telegram_sign.png";
import icon_website_sign from "./img/website_sign.png";
import icon_whatsapp_sign from "./img/whatsapp_sign.png";


export default function Organization_SocialHub_Page() {
  return (
    <div class="wrapper   organization_mode" id='socialHub_Page'>
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

                        <div class="menu-item  active">
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

                    <a href="/organization/profile">Profile</a>
                </div>
  
                
                <div class="container__main">
                    <div class="content">
                        <div class="content__title">
                            <p>Social Hub</p>
                        </div>

                
                        <div class="content__body">
                            <div class="content__additional">
                                <div class="add_new_socialMedia-box">    
                                    <a href="">
                                        <button class="add_new_socialMedia-box-button">
                                            <img src={icon_plus_sign} alt=""/>
        
                                            <p>ADD</p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            
                            
                            <div class="content-box">
                                <div class="social_hub-flex-box">
                                    {/* <!-- _1 SocialMedia-box --> */}
                                    <div class="socialMedia-box">
                                        <div class="box-content-container">
                                            <img src={icon_website_sign} class="socialMedia-img  square" alt=""/>
        
                                            <p class="socialMedia-title">Website</p>
                                        </div>
                                        
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

                                    {/* <!-- _2 SocialMedia-box --> */}
                                    <div class="socialMedia-box">
                                        <div class="box-content-container">
                                            <img src={icon_instagram} class="socialMedia-img" alt=""/>
        
                                            <p class="socialMedia-title">Instagram</p>
                                        </div>
                                        
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

                                    {/* <!-- _3 SocialMedia-box --> */}
                                    <div class="socialMedia-box">
                                        <div class="box-content-container">
                                            <img src={icon_whatsapp_sign} class="socialMedia-img" alt=""/>
        
                                            <p class="socialMedia-title">Whatsapp</p>
                                        </div>
                                        
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

                                    {/* <!-- _4 SocialMedia-box --> */}
                                    <div class="socialMedia-box">
                                        <div class="box-content-container">
                                            <img src={icon_telegram_sign} class="socialMedia-img" alt=""/>
        
                                            <p class="socialMedia-title">Telegram</p>
                                        </div>
                                        
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
                                
                                
                            </div>

                        </div>
                    </div>
                </div>
              

            </div>

        </div>

    </div>
  )
}
