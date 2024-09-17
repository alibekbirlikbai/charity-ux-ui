import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/organization (general).css";
import "../_(general)/css (general)/myDonation (general).css";
import "./css/MyDonationsPage-Recieved-MakeDonationREPORT.css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

import icon_back_to from "./img/back_to-icon.png";
import icon_cloud_upload from "./img/cloud_upload-icon.png";


export default function Organization_MyDonations_Page_Recieved_MakeDonationREPORT() {
    document.addEventListener('DOMContentLoaded', function() {
        const textarea = document.querySelector("textarea");

        textarea.addEventListener("keyup", e => {
            textarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        })
    })

  return (
    <div class="wrapper   organization_mode   myDonations" id='myDonations_Page_Recieved_MakeDonationREPORT'>
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

                        <div class="menu-item  active">
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

                    <a href="/organization/profile">Profile</a>
                </div>

                
                <div class="container__main">
                    <div class="content">
                        <div class="content__title">
                            <p>Donations</p>
                        </div>
                
                        <div class="content__body">                            
                            <div class="content-title-select-box">
                                <a href="/organization/donations/respond">Respond</a>

                                <a href="/organization/donations/send">Send</a>   
                                
                                <a href="/organization/donations/recieved" class="active">Recieved</a> 

                                <a href="/organization/donations/done_(archived)">Done_(Archived)</a> 
                            </div>
                            
                            <div class="content-box">                                
                                <div class="back_to_doneArchived_link">
                                    <a href="/organization/donations/recieved">
                                        <img src={icon_back_to} alt=""/>

                                        <p>Back to <b>Recieved</b></p>
                                    </a>
                                </div>

                                <div class="url_and_report_container">
                                    <div class="page-url">
                                        <a href="/organization/donations/recieved">Recieved</a>{'>'}<b>MakeReport</b>
                                    </div>

                                    <div class="report-content-box">
                                        <div class="report-title">
                                            <p>Report</p>
                                        </div>

                                        <div class="report-flex-box">
                                            {/* <!-- _1 box --> */}
                                            <div class="report_box">
                                                <div class="box-title">
                                                    <h2>Info about Donation</h2>
                                                </div>

                                                <div class="box-content">
                                                    {/* <!-- #1 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title  flex-direction-column">
                                                            <p>Date (publication):</p>
                                                            <p>by Donor</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>18 October, 2022</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #2 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title  flex-direction-column">
                                                            <p>Date (recieved):</p>
                                                            <p>by Organization</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>20 October, 2022</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #3 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title">
                                                            <p>Donation Form:</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>Toy</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #4 item-box --> */}
                                                    <div class="item-box" id="item_donor">
                                                        <div class="item-title">
                                                            <p>Donor:</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>Name Surname</p>

                                                            <span>/</span>

                                                            <p>Anonymous</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #5 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title">
                                                            <p>Organization:</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>HelpPeople Charity</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #6 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title">
                                                            <p>Address (sending):</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>(Address)</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #7 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title">
                                                            <p>Address (delivery):</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>(Address)</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #8 item-box --> */}
                                                    <div class="item-box" id="item_contacts">
                                                        <div class="item-title">
                                                            <p>Contacts:</p>
                                                            <p>(Donor)</p>
                                                        </div>

                                                        <div class="item-content  flex-direction-column">
                                                            <p>example@gmail.com</p>
                                                            <p>(+7) xxx xxx xx xx</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #9 item-box --> */}
                                                    <div class="item-box" id="item_contacts">
                                                        <div class="item-title">
                                                            <p>Contacts:</p>
                                                            <p>(Organ.)</p>
                                                        </div>

                                                        <div class="item-content  flex-direction-column">
                                                            <p>helpPeopleCharity@support.com</p>
                                                            <p>(+7) xxx xxx xx xx</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #10 item-box --> */}
                                                    <div class="item-box">
                                                        <div class="item-title">
                                                            <p>Volunteer (delivery):</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>Alibek Birlikbai</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #11 item-box (Donation_Images) --> */}
                                                    <div class="item-box  flex-direction-column" id="item_donation_img">
                                                        <div class="item-title  flex-direction-column">
                                                            <p>Donation:</p>
                                                            <p>(photo, video)</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <div class="donation-img"></div>
                                                            <div class="donation-img"></div>
                                                            <div class="donation-img"></div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #12 item-box (Donation_Description) --> */}
                                                    <div class="item-box  flex-direction-column">
                                                        <div class="item-title">
                                                            <p>Description:</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <p>Description of donation (what is it / condition / ...)</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            <hr/>

                                            {/* <!-- _2 box --> */}
                                            <div class="report_box">
                                                <div class="box-title">
                                                    <h2>Report</h2>
                                                </div>

                                                <div class="box-content">
                                                    {/* <!-- #1 item-box --> */}
                                                    <div class="item-box  flex-direction-column" id="item_report_drag_and_drop">
                                                        <div class="item-title  flex-direction-column">
                                                            <p>Report:</p>
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

                                                    {/* <!-- #2 item-box --> */}
                                                    <div class="item-box  flex-direction-column" id="item-description">
                                                        <div class="item-title">
                                                            <p>Description:</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <textarea rows="1" placeholder="Thank you, for your donation!"></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <hr/>

                                            {/* <!-- _3 box --> */}
                                            <div class="report_box">
                                                <div class="make_Report-button-box">
                                                    <button class="make_Report-button">
                                                        <a href="/organization/donations/recieved">Make Report</a>
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
    </div>


  )
}
