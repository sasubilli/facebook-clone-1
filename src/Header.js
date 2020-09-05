import React from 'react'
import "./Header.css";
// This search Icon is imported from @material-ui.com//
import SearchIcon from '@material-ui/icons/Search';
// This Home Icon is imported from @material-ui.com//
import HomeIcon from "@material-ui/icons/Home";
// This Flag Icon is imported from @material-ui.com//
import FlagIcon from '@material-ui/icons/Flag';
// This subscriptionOutlined Icon is imported from @material-ui.com//
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
// This storefront Icon is imported from @material-ui.com//
import StorefrontIcon from '@material-ui/icons/Storefront';
// This supervisedUserCircle Icon is imported from @material-ui.com//
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// This Avatar and Iconbutton is from @material-ui/core //
import { Avatar, IconButton} from "@material-ui/core";
// This Add is imported from @material-ui.com //
import AddIcon from "@material-ui/icons/Add";
// This ForumIcom is imported from @material-ui.com //
import ForumIcon from "@material-ui/icons/Forum";
// This NotificationsActiveIcon is imported from @material-ui.com //
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// This ExpandMoreIcon is imported from @material-ui.com //
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';




function Header() {
  const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
        <div className="header_left" // Facebook Icon //
        >
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/40px-Facebook_f_logo_%282019%29.svg.png"
            alt="Loading..."
            />
            <div   /* This Search Icon is taken from import above*/
            className="header_input">
              <SearchIcon />
              <input placeholder="Search Facebook" type="text" />   
            </div>
        </div>

        <div 
        className="header_center">
            <div /* This Home Icon is taken from import above*/
            className="header_option header_option--active">
              <HomeIcon fontSize="large" />      
            </div>
            <div /* This Flag Icon font is taken from import above*/ 
            className="header_option">
              <FlagIcon fontSize="large" />      
            </div>
            <div /* This SubscriptionOutlined Icon font is taken from import above*/   
            className="header_option">
              <SubscriptionsOutlinedIcon fontSize="large" />      
            </div>
            <div /* This Storefront Icon font is taken from import above*/   
            className="header_option">
              <StorefrontIcon fontSize="large" />      
            </div>
            <div  /* This SupervisedUserCircleIcon font is taken from import above*/  
            className="header_option">
              <SupervisedUserCircleIcon fontSize="large" />      
            </div>

        </div>

        <div className="header_right">
          <div className="header_info">
            <Avatar src={user.photoURL} /> 
            <h4>{user.displayName}</h4>
          </div>
          {/* These Icons are declared above at import */}
          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <ForumIcon />
          </IconButton>

          <IconButton>
            < NotificationsActiveIcon />
          </IconButton>

          <IconButton>
            <ExpandMoreIcon />
          </IconButton>

        </div>
        </div>
    );
}

export default Header;
