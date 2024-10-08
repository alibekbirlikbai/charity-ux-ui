import React from 'react'

/*__CSS__*/
import '../(general)/css (general)/user (general).css';
import '../(general)/css (general)/myDonations (general).css';
import './css/MyDonations_DONE(Archived)_Page.css';

/*__JavaScript__*/
// import '../(general)/js (general)/title_box_position_sticky';


import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*MyDonations icons*/
import icon_arrow_down from '../(general)/img (general)/arrow-down-icon.png';
import icon_arrow_left from '../(general)/img (general)/arrow-left-icon.png';
import icon_arrow_right from '../(general)/img (general)/arrow-right-icon.png';

/*MyDonations_Done(Archived)_Page icons*/
import icon_document from './img/document_icon.png';


export default function User_MyDonations_DONE_Archived_Page() {
    document.addEventListener('DOMContentLoaded', function() {
    
        window.addEventListener('scroll', myFunction);
    
        var header = document.getElementById("title_box_position_sticky");
        // var sticky = header.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset >= 295) {
                header.classList.add("sticky");
                document.querySelector(".myDonations-flex-box").style.paddingTop = "55px";
                document.querySelector(".myDonations-content-box").style.borderTopLeftRadius = "0";
                document.querySelector(".myDonations-content-box").style.borderTopRightRadius = "0";
                document.querySelector(".titles-box").style.borderTopLeftRadius = "0";
                document.querySelector(".titles-box").style.borderTopRightRadius = "0";
            } else {
                header.classList.remove("sticky");
                document.querySelector(".myDonations-flex-box").style.paddingTop = "15px";
                document.querySelector(".myDonations-content-box").style.borderTopLeftRadius = "10px";
                document.querySelector(".myDonations-content-box").style.borderTopRightRadius = "10px";
                document.querySelector(".titles-box").style.borderTopLeftRadius = "5px";
                document.querySelector(".titles-box").style.borderTopRightRadius = "5px";
            }
        }
    })
    

  return (
    <div class="wrapper   user_mode   myDonations" id='myDonations_Done_Archived_Page'>
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
                            <p>My Donations</p>
                        </div>
                
                        <div class="content__body">                            
                            <div class="content-title-select-box">
                                <a href="/user/my-donations/not-respond">Not-Respond</a>

                                <a href="/user/my-donations/respond">Respond</a>
                                
                                <a href="/user/my-donations/done_(archived)" class="active">Done (Archived)</a>
                            </div>
                            
                            <div class="content-box">                                
                                {/* <!-- Snow_Entity_BOX --> */}
                                <div class="show-entity-box">
                                    <p>Show
                                        <div class="entity-count-box">
                                            <p class="entity-count">3</p>
                                            {/* <!-- <input type="number" class="entity-count" value="3" maxlength="1"> --> */}

                                            <img src={icon_arrow_down} class="arrow-down-img" alt=""/>
                                        </div>
                                    entities</p>
                                </div>  

                                <div class="myDonations-content-box">
                                    <div class="titles-box"  id="title_box_position_sticky">
                                        <div class="title" id="title_donation">
                                            <p>Donation</p>
                                        </div>

                                        <div class="title" id="title_date">
                                            <div class="vertical-hr"></div>

                                            <p>Date</p>
                                        </div>

                                        

                                        <div class="title" id="title_action">
                                            <div class="vertical-hr"></div>

                                            <p>Action</p>
                                        </div>

                                    </div>

                                    <div class="myDonations-flex-box">
                                        {/* <!-- #1 donation --> */}
                                        <div class="myDonations-box">
                                            <div class="box-content">
                                                <div class="content-title-box">
                                                    <div class="content-title" id="title_donation">
                                                        <p>Toy</p>
                                                    </div>

                                                    <div class="content-title" id="title_date">
                                                        <p>20 October, 2022</p>
                                                    </div>
                                                </div>

                                                <hr/>

                                                <div class="content-description-box">
                                                    <div class="description-img-box">
                                                        <div class="donation-img"></div>
                                                        
                                                        <div class="donation-img"></div>

                                                        <div class="donation-img"></div>
                                                    </div>

                                                    <p class="description-text-box">Description of donation...</p>
                                                </div>
                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <a href="/user/my-donations/done_(archived)/report">
                                                        <img src={icon_document} alt=""/>

                                                        <button class="see_report-button">
                                                            <p>See Report</p>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- #2 donation --> */}
                                        <div class="myDonations-box">
                                            <div class="box-content">
                                                <div class="content-title-box">
                                                    <div class="content-title" id="title_donation">
                                                        <p>Clothes</p>
                                                    </div>

                                                    <div class="content-title" id="title_date">
                                                        <p>15 October, 2022</p>
                                                    </div>
                                                </div>

                                                <hr/>

                                                <div class="content-description-box">
                                                    <div class="description-img-box">
                                                        <div class="donation-img"></div>
                                                        
                                                        <div class="donation-img"></div>

                                                        <div class="donation-img"></div>
                                                    </div>

                                                    <p class="description-text-box">Description of donation...</p>
                                                </div>
                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <a href="">
                                                        <img src={icon_document} alt=""/>

                                                        <button class="see_report-button">
                                                            <p>See Report</p>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- #3 donation --> */}
                                        <div class="myDonations-box">
                                            <div class="box-content">
                                                <div class="content-title-box">
                                                    <div class="content-title" id="title_donation">
                                                        <p>Dog food</p>
                                                    </div>

                                                    <div class="content-title" id="title_date">
                                                        <p>10 October, 2022</p>
                                                    </div>
                                                </div>

                                                <hr/>

                                                <div class="content-description-box">
                                                    <div class="description-img-box">
                                                        <div class="donation-img"></div>
                                                        
                                                        <div class="donation-img"></div>

                                                        <div class="donation-img"></div>
                                                    </div>

                                                    <p class="description-text-box">Description of donation...</p>
                                                </div>
                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <a href="">
                                                        <img src={icon_document} alt=""/>

                                                        <button class="see_report-button">
                                                            <p>See Report</p>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                {/* <!-- Page_Mapping_BOX --> */}
                                <div class="page-mapping-box">
                                    <p class="page-mapping-text">Show 1 to 3 of 15 entities</p>

                                    <div class="page-mapping-select">
                                        <div class="active">
                                            <a href="" class="anchor_attributes_reset">
                                                <img src={icon_arrow_left} alt=""/>
                                            </a>
                                        </div>

                                        <div class="active">
                                            <a href="" class="anchor_attributes_reset">1</a>
                                        </div>

                                        <div>
                                            <a href="" class="anchor_attributes_reset">2</a>
                                        </div>

                                        <div>
                                            <a href="" class="anchor_attributes_reset">3</a>
                                        </div>

                                        <div>
                                            <a href="" class="anchor_attributes_reset">...</a>
                                        </div>

                                        <div>
                                            <a href="" class="anchor_attributes_reset">5</a>
                                        </div>

                                        <div class="active">
                                            <a href="" class="anchor_attributes_reset">
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
        </div>


        
        
        <div class="FOOTER">
            <div class="copyright__container">
                <p class="copyright-text">© 2023 QaiyrAmanat</p>
            </div>
        </div>
    </div>
  )
}

