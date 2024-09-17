import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/organization (general).css";
import "./css/Reports_Page.css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

import icon_arrow_down from "../_(general)/img (general)/arrow-down-icon.png";
import icon_arrow_left from "../_(general)/img (general)/arrow-left-icon.png";
import icon_arrow_right from "../_(general)/img (general)/arrow-right-icon.png";


export default function Organization_Reports_Page() {
    document.addEventListener('DOMContentLoaded', function() {
    
        window.addEventListener('scroll', myFunction);
    
        var header = document.getElementById("title_box_position_sticky");
        // var sticky = header.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset >= 225) {
                header.classList.add("sticky");
                document.querySelector(".myDonations-flex-box").style.paddingTop = "55px";
                // document.querySelector(".myDonations-content-box").style.borderTopLeftRadius = "0";
                // document.querySelector(".myDonations-content-box").style.borderTopRightRadius = "0";
                document.querySelector(".titles-box").style.borderTopLeftRadius = "0";
                document.querySelector(".titles-box").style.borderTopRightRadius = "0";
            } else {
                header.classList.remove("sticky");
                document.querySelector(".myDonations-flex-box").style.paddingTop = "15px";
                // document.querySelector(".myDonations-content-box").style.borderTopLeftRadius = "10px";
                // document.querySelector(".myDonations-content-box").style.borderTopRightRadius = "10px";
                document.querySelector(".titles-box").style.borderTopLeftRadius = "5px";
                document.querySelector(".titles-box").style.borderTopRightRadius = "5px";
            }
        }
    })

  return (
    <div class="wrapper   organization_mode" id='reports_Page'>
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

                        <div class="menu-item  active">
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

                    <a href="/organization/profile">Profile</a>
                </div>
  
                
                <div class="container__main">
                    <div class="content">
                        
                
                        <div class="content__body">                            
                            <div class="content__title">
                                <p>Reports</p>
                            </div>
                            
                            <div class="content-box">                                
                                {/* <!-- Snow_Entity_BOX --> */}
                                <div class="show-entity-box">
                                    <p>Show
                                        <div class="entity-count-box">
                                            <p class="entity-count">5</p>
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

                                        <div class="title" id="title_contacts">
                                            <div class="vertical-hr"></div>

                                            <p>Contacts</p>
                                        </div>

                                        <div class="title" id="title_address">
                                            <div class="vertical-hr"></div>

                                            <p>Address</p>
                                        </div>

                                        <div class="title" id="title_action">
                                            <div class="vertical-hr"></div>

                                            <p>Volunteer</p>
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

                                                    <div class="content-title" id="title_contacts">
                                                        <p>Name Surname</p>

                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address">
                                                        <p>Almaty,</p>

                                                        <p>Almaly district</p>
                                                    </div>
                                                </div>

                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <div class="make_report-content-action">
                                                        <button class="make_report-button">
                                                            <a href="/organization/donations/done_(archived)/donation_report">See Report</a>
                                                        </button>
                                                    </div>
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
                                                        <p>19 October, 2022</p>
                                                    </div>

                                                    <div class="content-title" id="title_contacts">
                                                        <p>Name Surname</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address">
                                                        <p>Almaty,</p>

                                                        <p>Almaly district</p>
                                                    </div>
                                                </div>

                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <div class="make_report-content-action">
                                                        <button class="make_report-button">
                                                            <a href="">See Report</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- #3 donation --> */}
                                        <div class="myDonations-box">
                                            <div class="box-content">
                                                <div class="content-title-box">
                                                    <div class="content-title" id="title_donation">
                                                        <p>Pet food</p>
                                                    </div>

                                                    <div class="content-title" id="title_date">
                                                        <p>18 October, 2022</p>
                                                    </div>

                                                    <div class="content-title" id="title_contacts">
                                                        <p>Name Surname</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address">
                                                        <p>Almaty,</p>

                                                        <p>Almaly district</p>
                                                    </div>
                                                </div>

                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <div class="make_report-content-action">
                                                        <button class="make_report-button">
                                                            <a href="">See Report</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- #4 donation --> */}
                                        <div class="myDonations-box">
                                            <div class="box-content">
                                                <div class="content-title-box">
                                                    <div class="content-title" id="title_donation">
                                                        <p>School supplies</p>
                                                    </div>

                                                    <div class="content-title" id="title_date">
                                                        <p>15 October, 2022</p>
                                                    </div>

                                                    <div class="content-title" id="title_contacts">
                                                        <p>Name Surname</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address">
                                                        <p>Almaty,</p>

                                                        <p>Almaly district</p>
                                                    </div>
                                                </div>

                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <div class="make_report-content-action">
                                                        <button class="make_report-button">
                                                            <a href="">See Report</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- #5 donation --> */}
                                        <div class="myDonations-box">
                                            <div class="box-content">
                                                <div class="content-title-box">
                                                    <div class="content-title" id="title_donation">
                                                        <p>Personal <br/> hygiene items</p>
                                                    </div>

                                                    <div class="content-title" id="title_date">
                                                        <p>10 October, 2022</p>
                                                    </div>

                                                    <div class="content-title" id="title_contacts">
                                                        <p>Name Surname</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address">
                                                        <p>Almaty,</p>

                                                        <p>Almaly district</p>
                                                    </div>
                                                </div>

                                            </div>
                                                
                                            <div class="box-action">
                                                <div class="vertical-hr"></div>

                                                <div class="box-action-container">
                                                    <div class="make_report-content-action">
                                                        <button class="make_report-button">
                                                            <a href="">See Report</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Page_Mapping_BOX --> */}
                                <div class="page-mapping-box">
                                    <p class="page-mapping-text">Show 1 to 5 of 50 entities</p>

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

    </div>
  )
}
