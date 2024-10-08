import React from 'react'

/*__CSS__*/
import "../_(general)/css (general)/volunteer (general).css";
import "./css/Profile_Page.css";

/*__IMAGE__*/
import img_logo from '../_(general)/img (general)/logo.png';

/*__Profile_Page icons__*/
import icon_user from './img/user-icon.png';
import icon_settings from './img/settings-icon.png';
import icon_logout from './img/logout-icon.png';


export default function Volunteer_Profile_Page() {
        {/* <script>
        const textarea = document.querySelector("textarea");
        textarea.addEventListener("keyup", e => {
            textarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        })
    </script> */}

  return (
    <div class="wrapper  volunteer_mode" id="profile_Page">
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

                        <div class="menu-item">
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

                    <a href="/volunteer/profile" class="active">Profile</a>
                </div>

                
                <div class="container__main">
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
                                    {/* <div class="box-item" id="item_address">
                                        <div class="item-title">
                                            <p>Address:</p>
                                        </div>

                                        <div class="item-content">
                                            <input type="text" value="email"/>
                                        </div>
                                    </div> */}
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

    </div>
  )
}
