import React from 'react'

import '../(general)/css (general)/user (general).css';
import './css/(selected) CategoryPage.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*Category_Page icons*/
import icon_arrow_down from '../(general)/img (general)/arrow-down-icon.png';
import img_charity from '../(general)/img (general)/charity-img.jpg';
import icon_arrow_left from '../(general)/img (general)/arrow-left-icon.png';
import icon_arrow_right from '../(general)/img (general)/arrow-right-icon.png';


export default function User_Category_Page() {
  return (
    <div className="wrapper   user_mode" id='category_Page'>
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
                

                <div className="url-and-container__main   min_width   center_div">
                    <div className="page-url">
                        <p>
                            <a href="/user/home" className="anchor_attributes_reset">home</a>{'>'}<b>category</b>
                        </p>
                    </div>
                </div>
            
                <div className="container__main   min_width   center_div">
                    <div className="content">
                        <div className="content__title">
                            <p>Community Development Charities</p>
                        </div>
                
                        <div className="content__body">
                            {/* <!-- Snow_Entity_BOX --> */}
                            <div className="show-entity-box">
                                <p>Show
                                    <div className="entity-count-box">
                                        <p className="entity-count">3</p>
                                        {/* <!-- <input type="number" className="entity-count" value="3" maxlength="1"> --> */}

                                        <img src={icon_arrow_down} className="arrow-down-img" alt=""/>
                                    </div>
                                entities</p>
                            </div>                        

                            <div className="category-flex-box">
                                {/* <!-- 1 row --> */}
                                <a href="/user/charity-profile">
                                    <div className="charity-box">
                                            <img src={img_charity} className="charity-img" alt=""/>
        
                                            <div className="charity-content-box">
                                                <div className="charity-content">
                                                    <div className="charity-content-title">
                                                        <p>Organization Name:</p>
                                                    </div>
            
                                                    <div className="charity-content-text">
                                                        <p className="text_underline">HelpPeople Charity</p>
                                                    </div>
                                                </div>
        
                                                <div className="charity-content">
                                                    <div className="charity-content-title">
                                                        <p>Category:</p>
                                                    </div>
            
                                                    <div className="charity-content-text">
                                                        <p>Community Development Charities, Food Distribution, Family Support Charities</p>
                                                    </div>
                                                </div>
        
                                                <div className="charity-content">
                                                    <div className="charity-content-title">
                                                        <p>Donation Form:</p>
                                                    </div>
            
                                                    <div className="charity-content-text">
                                                        <p>Clothes, Food, Social support</p>
                                                    </div>
                                                </div>
        
                                                <div className="charity-content">
                                                    <div className="charity-content-title">
                                                        <p>Description</p>
                                                    </div>
            
                                                    <div className="charity-content-text">
                                                        <p>Our Charitable Organization is engaged in community development, support for low-income families and food distribution...</p>
                                                    </div>
                                                </div>
                                            </div>
                                
                                    </div>
                                </a>

                                {/* <!-- 2 row --> */}
                                <div className="charity-box">
                                    <img src={img_charity} className="charity-img" alt=""/>

                                    <div className="charity-content-box">
                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Organization Name:</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p className="text_underline">Some Charity</p>
                                            </div>
                                        </div>

                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Category:</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p>Some Category</p>
                                            </div>
                                        </div>

                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Donation Form:</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p>Some Donation Forms</p>
                                            </div>
                                        </div>

                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Description</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p>Description about some Charity</p>
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>
                                
                                {/* <!-- 3 row --> */}
                                <div className="charity-box">
                                    <img src={img_charity} className="charity-img" alt=""/>

                                    <div className="charity-content-box">
                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Organization Name:</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p className="text_underline">Some Charity</p>
                                            </div>
                                        </div>

                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Category:</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p>Some Category</p>
                                            </div>
                                        </div>

                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Donation Form:</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p>Some Donation Forms</p>
                                            </div>
                                        </div>

                                        <div className="charity-content">
                                            <div className="charity-content-title">
                                                <p>Description</p>
                                            </div>

                                            <div className="charity-content-text">
                                                <p>Description about some Charity</p>
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>                                
                                
                            </div> 

                            {/* <!-- Page_Mapping_BOX --> */}
                            <div className="page-mapping-box">
                                <p className="page-mapping-text">Show 1 to 3 of 150 entities</p>

                                <div className="page-mapping-select">
                                    <div className="active">
                                        <a href="" className="anchor_attributes_reset">
                                            <img src={icon_arrow_left} alt=""/>
                                        </a>
                                    </div>

                                    <div className="active">
                                        <a href="" className="anchor_attributes_reset">1</a>
                                    </div>

                                    <div>
                                        <a href="" className="anchor_attributes_reset">2</a>
                                    </div>

                                    <div>
                                        <a href="" className="anchor_attributes_reset">3</a>
                                    </div>

                                    <div>
                                        <a href="" className="anchor_attributes_reset">...</a>
                                    </div>

                                    <div>
                                        <a href="" className="anchor_attributes_reset">50</a>
                                    </div>

                                    <div className="active">
                                        <a href="" className="anchor_attributes_reset">
                                            <img src={icon_arrow_right} alt=""/>
                                        </a>
                                    </div>
                                </div>
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


