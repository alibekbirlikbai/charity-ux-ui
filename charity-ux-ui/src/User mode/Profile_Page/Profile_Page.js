import React from 'react'

/*__CSS__*/
import '../(general)/css (general)/user (general).css';
import './css/Profile_Page.css';

/*__IMAGE__*/
import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*Profile_Page icons*/
import icon_logout from './img/logout-icon.png';
import icon_user from './img/user-icon.png';
import icon_settings from './img/settings-icon.png';


export default function User_Profile_Page() {
  return (
    <div class="wrapper   user_mode" id='profile_Page'>
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
                    <a href="/user/profile" className="active">Profile</a>
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
                            <p>Profile</p>
                        </div>
                
                        <div class="content__body">
                            {/* <!-- _1 Content-box --> */}
                            <div class="content-box">
                                <div class="box-title">
                                    <img src={icon_user} alt=""/>

                                    <p>User info</p>
                                </div>

                                <div class="box-content">
                                    {/* <!-- #1 Box_Item --> */}
                                    <div class="box-item" id="item_name">
                                        <div class="item-title">
                                            <p>Name:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="Name"/>
                                        </div>
                                    </div>

                                    {/* <!-- #2 Box_Item --> */}
                                    <div class="box-item" id="item_surname">
                                        <div class="item-title">
                                            <p>Surname:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="Surname"/>
                                        </div>
                                    </div>

                                    {/* <!-- #3 Box_Item --> */}
                                    <div class="box-item" id="item_contacts">
                                        <div class="item-title">
                                            <p>Contacts:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="(+7) xxx xxx xx xx"/>
                                        </div>
                                    </div>

                                    {/* <!-- #4 Box_Item --> */}
                                    <div class="box-item" id="item_address">
                                        <div class="item-title">
                                            <p>Address:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="Almaty, Almaly district"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            {/* <!-- _2 Content-box --> */}
                            <div class="content-box">
                                <div class="box-title">
                                    <img src={icon_settings} alt=""/>

                                    <p>Account info</p>
                                </div>

                                <div class="box-content">
                                    {/* <!-- #1 Box_Item --> */}
                                    <div class="box-item" id="item_email">
                                        <div class="item-title">
                                            <p>Email:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="example@gmail.com"/>
                                        </div>
                                    </div>

                                    {/* <!-- #2 Box_Item --> */}
                                    <div class="box-item" id="item_password">
                                        <div class="item-title">
                                            <p>Password:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="xxxxxxxxxx"/>
                                        </div>
                                    </div>

                                    {/* <!-- #2 Box_Item --> */}
                                    <div class="box-item" id="logout">
                                        <div class="item-content">
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


        <div class="FOOTER">
            <div class="copyright__container">
                <p class="copyright-text">© 2023 QaiyrAmanat</p>
            </div>
        </div>
    
    </div>
  )
}

    
    
        
        
        
