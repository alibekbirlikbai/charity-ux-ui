
import React from 'react'

import '../(general)/css (general)/user (general).css';
import '../(general)/css (general)/myDonations (general).css';
import './css/MyDonations_DONE_(Archived)_REPORT_Page.css';

import img_logo from '../(general)/img (general)/logo.png';
import icon_search from '../(general)/img (general)/search-icon.png';
import icon_location from '../(general)/img (general)/location-icon.png';

/*MyDonations_Done(Archived)_Page icons*/
import icon_back_to from './img/back_to-icon.png';


export default function User_MyDonations_DONE_Archived_REPORT_Page() {
  return (
    <div class="wrapper   user_mode   myDonations" id='myDonations_Done_Archived_REPORT_Page'>
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
                                <div class="back_to_doneArchived_link">
                                    <a href="/user/my-donations/done_(archived)">
                                        <img src={icon_back_to} alt=""/>

                                        <p>Back to <b>Done (Archived)</b></p>
                                    </a>
                                </div>

                                <div class="url_and_report_container">
                                    <div class="page-url">
                                        <a href="/user/my-donations/done_(archived)">Done (Archived)</a>{">"}<b>DonationReport</b>
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
                                                            <p>Address</p>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #8 item-box --> */}
                                                    <div class="item-box" id="item_contacts">
                                                        <div class="item-title  flex-direction-column">
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
                                                        <div class="item-title  flex-direction-column">
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
                                                    <div class="item-box  flex-direction-column" id="item_report_img">
                                                        <div class="item-title  flex-direction-column">
                                                            <p>Report:</p>
                                                            <p>(photo, video)</p>
                                                        </div>

                                                        <div class="item-content">
                                                            <div class="donation-img"></div>
                                                            <div class="donation-img"></div>
                                                            <div class="donation-img"></div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- #2 item-box --> */}
                                                    <div class="item-box" id="item_report_description">
                                                        <div class="item-content">
                                                            <p>Thank you, for your donation!</p>
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
        </div>




        <div class="FOOTER">
            <div class="copyright__container">
                <p class="copyright-text">© 2023 QaiyrAmanat</p>
            </div>
        </div>
    </div>
  )
}
