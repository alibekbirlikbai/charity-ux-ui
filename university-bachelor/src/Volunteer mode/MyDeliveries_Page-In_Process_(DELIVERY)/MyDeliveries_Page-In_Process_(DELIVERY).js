import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/volunteer (general).css";
import "./css/MyDeliveries_Page-In_Process_(DELIVERY).css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

import icon_arrow_down from "../_(general)/img (general)/arrow-down-icon.png";
import icon_arrow_left from "../_(general)/img (general)/arrow-left-icon.png";
import icon_arrow_right from "../_(general)/img (general)/arrow-right-icon.png";


export default function Volunteer_MyDeliveries_Page_InProcess_DELIVERY() {
    document.addEventListener('DOMContentLoaded', function() {
    
        window.addEventListener('scroll', myFunction);
    
        var header = document.getElementById("title_box_position_sticky");
        // var sticky = header.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset >= 225) {
                header.classList.add("sticky");
                document.querySelector(".myDonations-flex-box").style.paddingTop = "85px";
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
    <div class="wrapper  volunteer_mode" id="myDeliveries_Page_InProcess_DELIVERY">
        <div class="SIDEBAR">
            <div class="sidebar__container">
                {/* <!-- Logo --> */}
                <div class="logo__container">
                    <a href="/volunteer/home/donation-list" class="logo-link">
                        <img class="logo-img" src={img_logo} alt="" target="_blank"/>
                    </a>
                </div>

                <div class="content">
                    {/* <!-- Menu --> */}
                    <div class="menu__container">
                        <div class="menu-item">
                            <a href="/volunteer/home/donation-list">Dashboard</a>
                        </div>

                        <div class="menu-item  active">
                            <a href="/volunteer/deliveries/respond">Deliveries</a>
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
                    <a href="/volunteer/help">Help</a>

                    <a href="/volunteer/profile">Profile</a>
                </div>

                
                <div class="container__main">
                    <div class="content">
                        <div class="content__title">
                            <p>Donations</p>
                        </div>
                
                        <div class="content__body">                            
                            <div class="content-title-select-box">
                                <a href="/volunteer/deliveries/respond">Respond</a>

                                <a href="/volunteer/deliveries/in-process_(delivery)" class="active">In-Process_(Delivery)</a>
                                
                                <a href="/volunteer/deliveries/done_(archived)">Done_(Archived)</a>
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

                                        {/* <!-- (Donor) --> */}
                                        <div class="title" id="title_contacts_DONOR">
                                            <div class="vertical-hr"></div>

                                            <div class="title_container">
                                                <p>Contacts</p>

                                                <p>(Donor)</p>
                                            </div>
                                        </div>

                                        <div class="title" id="title_address_DONOR">
                                            <div class="vertical-hr"></div>

                                            <div class="title_container">
                                                <p>Address</p>

                                                <p>(Donor)</p>
                                            </div>
                                        </div>

                                        {/* <!-- (Charity) --> */}
                                        <div class="title" id="title_contacts_CHARITY">
                                            <div class="vertical-hr"></div>

                                            <div class="title_container">
                                                <p>Contacts</p>

                                                <p>(Charity)</p>
                                            </div>
                                        </div>

                                        <div class="title" id="title_address_CHARITY">
                                            <div class="vertical-hr"></div>

                                            <div class="title_container">
                                                <p>Address</p>

                                                <p>(Charity)</p>
                                            </div>
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

                                                    {/* <!-- (Donor) --> */}
                                                    <div class="content-title" id="title_contacts_DONOR">
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address_DONOR">
                                                        <p>Almaty,</p>

                                                        <p>Auezov district</p>
                                                    </div>


                                                    {/* <!-- (Charity) --> */}
                                                    <div class="content-title" id="title_contacts_CHARITY">
                                                        <p>HelpPeople Charity</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address_CHARITY">
                                                        <p>Almaty,</p>

                                                        <p>Almaly district</p>
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
                                                    <div class="delivered-content-action">
                                                        <button class="delivered-button">
                                                            <a href="">Delivered</a>
                                                        </button>

                                                        <p>(confirm)</p>
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
                                                        <p>15 October, 2022</p>
                                                    </div>

                                                    {/* <!-- (Donor) --> */}
                                                    <div class="content-title" id="title_contacts_DONOR">
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address_DONOR">
                                                        <p>(Address)</p>
                                                    </div>


                                                    {/* <!-- (Charity) --> */}
                                                    <div class="content-title" id="title_contacts_CHARITY">
                                                        <p>(some charity)</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address_CHARITY">
                                                        <p>(Address)</p>
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
                                                    <div class="delivered-content-action">
                                                        <button class="delivered-button">
                                                            <a href="">Delivered</a>
                                                        </button>

                                                        <p>(confirm)</p>
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
                                                        <p>10 October, 2022</p>
                                                    </div>

                                                    {/* <!-- (Donor) --> */}
                                                    <div class="content-title" id="title_contacts_DONOR">
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address_DONOR">
                                                        <p>(Address)</p>
                                                    </div>


                                                    {/* <!-- (Charity) --> */}
                                                    <div class="content-title" id="title_contacts_CHARITY">
                                                        <p>(some charity)</p>
                                                        
                                                        <p>example@gmail.com</p>

                                                        <p>(+7) xxx xxx xx xx</p>
                                                    </div>

                                                    <div class="content-title" id="title_address_CHARITY">
                                                        <p>(Address)</p>
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
                                                    <div class="delivered-content-action">
                                                        <button class="delivered-button">
                                                            <a href="">Delivered</a>
                                                        </button>

                                                        <p>(confirm)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Page_Mapping_BOX --> */}
                                <div class="page-mapping-box">
                                    <p class="page-mapping-text">Show 1 to 3 of 150 entities</p>

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
                                            <a href="" class="anchor_attributes_reset">50</a>
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
