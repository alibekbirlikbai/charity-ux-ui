import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

/*__Authorization__*/
import SignAs from "./_ AUTHORIZATION/signAs/signAs";
import Login_User from "./_ AUTHORIZATION/log-in/User/log-In (User)";
import Login_Organization from "./_ AUTHORIZATION/log-in/Organization/log-In (Organization)";
import Login_Volunteer from "./_ AUTHORIZATION/log-in/Volunteer/log-In (Volunteer)";

import Logup_User from "./_ AUTHORIZATION/log-up/User/log-Up (User)";
import Logup_Organization from "./_ AUTHORIZATION/log-up/Organization/log-Up (Organization)";
import Logup_Volunteer from "./_ AUTHORIZATION/log-up/Volunteer/log-Up (Volunteer)";

/*__User__*/
import User_Home_Page from "./User mode/HOME_Page (main)/homePage (main)";
import User_Category_Page from "./User mode/(selected) CATEGORY_Page/(selected) CategoryPage";
import User_Search_Page from "./User mode/(selected) SEARCH_Page/(selected) SearchPage";
import User_Charity_Page from "./User mode/(selected) CharityProfile_Page/(selected) CharityPage";

import User_Help_Page from "./User mode/Help_Page/Help_Page";
import User_Profile_Page from "./User mode/Profile_Page/Profile_Page";

import User_MakeDonation_Page from "./User mode/MakeDonation_Page/MakeDonation_Page";
import User_MakeDonation_DONE_Page from "./User mode/MakeDonation_DONE_Page/MakeDonation_DONE_Page";

import User_MyDonations_NOT_Respond_Page from "./User mode/MyDonations_NOT_RESPOND_Page/MyDonations_NOT_RESPOND_Page";
import User_MyDonations_Respond_Page from "./User mode/MyDonations_RESPOND_Page/MyDonations_RESPOND_Page";
import User_MyDonations_DONE_Archived_Page from "./User mode/MyDonations_DONE_(Archived)_Page/MyDonations_DONE(Archived)_Page";
import User_MyDonations_DONE_Archived_REPORT_Page from "./User mode/MyDonations_DONE_(Archived)_REPORT_Page/MyDonations_DONE_(Archived)_REPORT_Page";

/*__Organization__*/
import Organization_HOME_Page_DonationList from './Organization mode/Dashboard_Page_DonationList (main)/(Dashboard) HOME_Page_DonationList (main)';
import Organization_HOME_Page_SpecificDonationList from './Organization mode/Dashboard_Page_SpecificDonationList/(Dashboard) SpecificDonationList';

import Organization_Help_Page from './Organization mode/Help_Page/Help_Page';

import Organization_Profile_Page from './Organization mode/Profile_Page/Profile_Page';
import Organization_SocialHub_Page from './Organization mode/Social-Hub_Page/Social-Hub_Page';

import Organization_MyDonations_Page_Respond from './Organization mode/MyDonations_Page-Respond/MyDonationsPage-Respond';
import Organization_MyDonations_Page_Send from './Organization mode/MyDonations_Page-Send/MyDonationsPage-Send';
import Organization_MyDonations_Page_Recieved from './Organization mode/MyDonations_Page-Recieved/MyDonationsPage-Recieved';
import Organization_MyDonations_Page_Recieved_MakeDonationREPORT from './Organization mode/MyDonations_Page-Recieved-MakeDonationREPORT/MyDonationsPage-Recieved-MakeDonationREPORT';
import Organization_MyDonations_Page_DONE_Archived from './Organization mode/MyDonations_Page-Done_(Archived)/MyDonationsPage-Done_(Archived)';
import Organization_MyDonations_Page_DONE_Archived_DonationREPORT from './Organization mode/MyDonations_Page-Done_(Archived)-DonationREPORT/MyDonationsPage-Done_(Archived)-DonationREPORT';

import Organization_Reports_Page from './Organization mode/Reports_Page/Reports_Page';

/*__Volunteer__*/
import Volunteer_HOME_Page_DonationList from './Volunteer mode/Dashboard_Page_DonationList (main)/(Dashboard) HOME_Page_DonationList (main)';

import Volunteer_Help_Page from './Volunteer mode/Help_Page/Help_Page';
import Volunteer_Profile_Page from './Volunteer mode/Profile_Page/Profile_Page';

import Volunteer_MyDeliveries_Page_Respond from './Volunteer mode/MyDeliveries_Page-Respond/MyDeliveries_Page-Respond';
import Volunteer_MyDeliveries_Page_InProcess_DELIVERY from './Volunteer mode/MyDeliveries_Page-In_Process_(DELIVERY)/MyDeliveries_Page-In_Process_(DELIVERY)';
import Volunteer_MyDeliveries_Page_DONE_Archived from './Volunteer mode/MyDeliveries_Page-Done_(Archived)/MyDeliveries_Page-Done_(Archived)';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* __(DEFAULT_PAGE)__ */}
          <Route path="/" element={<Navigate to="/signAs" />} />

          {/* __Authorization__ */}
          <Route exact path="/signAs" element={<SignAs />} />

          <Route exact path="/auth/login/user" element={<Login_User />} />
          <Route exact path="/auth/login/organization" element={<Login_Organization />} />
          <Route exact path="/auth/login/volunteer" element={<Login_Volunteer />} />

          <Route exact path="/auth/logup/user" element={<Logup_User />} />
          <Route exact path="/auth/logup/organization" element={<Logup_Organization />} />
          <Route exact path="/auth/logup/volunteer" element={<Logup_Volunteer />} />

          {/* __User__ */}
          <Route exact path="/user/home" element={<User_Home_Page />} />
          <Route exact path="/user/category" element={<User_Category_Page />} />
          <Route exact path="/user/search" element={<User_Search_Page />} />
          <Route exact path="/user/charity-profile" element={<User_Charity_Page />} />

          <Route exact path="/user/help" element={<User_Help_Page />} />
          <Route exact path="/user/profile" element={<User_Profile_Page />} />

          <Route exact path="/user/make-donation" element={<User_MakeDonation_Page />} />
          <Route exact path="/user/make-donation/done" element={<User_MakeDonation_DONE_Page />} />

          <Route exact path="/user/my-donations/not-respond" element={<User_MyDonations_NOT_Respond_Page />} />
          <Route exact path="/user/my-donations/respond" element={<User_MyDonations_Respond_Page />} />
          <Route exact path="/user/my-donations/done_(archived)" element={<User_MyDonations_DONE_Archived_Page />} />
          <Route exact path="/user/my-donations/done_(archived)/report" element={<User_MyDonations_DONE_Archived_REPORT_Page />} />

          {/* __Organization__ */}
          <Route exact path="/organization/home/donation-List" element={<Organization_HOME_Page_DonationList />} />
          <Route exact path="/organization/home/specific-donation-List" element={<Organization_HOME_Page_SpecificDonationList />} />

          <Route exact path="/organization/help" element={<Organization_Help_Page />} />

          <Route exact path="/organization/profile" element={<Organization_Profile_Page />} />
          <Route exact path="/organization/social-hub" element={<Organization_SocialHub_Page />} />

          <Route exact path="/organization/donations/respond" element={<Organization_MyDonations_Page_Respond />} />
          <Route exact path="/organization/donations/send" element={<Organization_MyDonations_Page_Send />} />
          <Route exact path="/organization/donations/recieved" element={<Organization_MyDonations_Page_Recieved />} />
          <Route exact path="/organization/donations/recieved/make-donation_report" element={<Organization_MyDonations_Page_Recieved_MakeDonationREPORT />} />
          <Route exact path="/organization/donations/done_(archived)" element={<Organization_MyDonations_Page_DONE_Archived />} />
          <Route exact path="/organization/donations/done_(archived)/donation_report" element={<Organization_MyDonations_Page_DONE_Archived_DonationREPORT />} />

          <Route exact path="/organization/reports" element={<Organization_Reports_Page />} />

          {/* __Volunteer__ */}
          <Route exact path="/volunteer/home/donation-list" element={<Volunteer_HOME_Page_DonationList />} />

          <Route exact path="/volunteer/help" element={<Volunteer_Help_Page />} />
          <Route exact path="/volunteer/profile" element={<Volunteer_Profile_Page />} />

          <Route exact path="/volunteer/deliveries/respond" element={<Volunteer_MyDeliveries_Page_Respond />} />
          <Route exact path="/volunteer/deliveries/in-process_(delivery)" element={<Volunteer_MyDeliveries_Page_InProcess_DELIVERY />} />
          <Route exact path="/volunteer/deliveries/done_(archived)" element={<Volunteer_MyDeliveries_Page_DONE_Archived />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;


