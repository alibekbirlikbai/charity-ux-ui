import React from 'react'

/*__CSS__*/
import '../(general)/css (general)/user (general).css';
import './css/homePage (main).css';

/*__IMAGE__*/
import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

export default function User_Home_Page () {
  return (
    <div className="wrapper   user_mode" id='home_Page'>
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
    
    
        <div className="MAIN">
            <div className="container">
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
    
                <div className="container__main   min_width  center_div">
                    <div className="content">
                        <div className="content__title">
                            <p>Category</p>
                        </div>
                
                        <div className="content__body">
                            <div className="category-flex-box">
                                {/* <!-- 1 row --> */}
                                <a href="/user/category">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Community Development Charities</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Orphanages Charities</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Family Support Charities</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Nursing Home Support</p>
                                    </div>
                                </a>

                                
                                {/* <!-- 2 row --> */}
                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Homeless Shelters</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Animal Shelters</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">International Non-Governmental Organizations (INGO)</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Culture Charities</p>
                                    </div>
                                </a>


                                {/* <!-- 3 row --> */}
                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Environmental Charities</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Health Charities</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Emergency Charities</p>
                                    </div>
                                </a>

                                <a href="">
                                    <div className="category-box">
                                        <div className="category-img"></div>
    
                                        <p className="category-title">Food Distribution</p>
                                    </div>
                                </a>

                            </div>                                
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        
        <div className="FOOTER">
            <div className="copyright__container">
                <p className="copyright-text">© 2023 QaiyrAmanat</p>
            </div>
        </div>
    </div>
  )
}   
