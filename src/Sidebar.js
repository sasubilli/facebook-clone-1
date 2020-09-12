import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
// This LocalHospitalIcon is imported from "@material-ui.com" //
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
// This EmojiFlagsIcon is imported from "@material-ui.com" //
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
// This PeopleIcon is imported from "@material-ui.com" //
import PeopleIcon from "@material-ui/icons/People";
// This ChatIcon is imported from "@material-ui.com" //
import ChatIcon from "@material-ui/icons/Chat";
// This StorefrontIcon is imported from "@material-ui.com" //
import StorefrontIcon from "@material-ui/icons/Storefront";
// This VideoLibraryIcon is imported from "@material-ui.com" //
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider"

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
    return ( 
    <div className="Sidebar">{/* Image of the user*/}
        <SidebarRow src={user.photoURL} 
                    title={user.displayName} />
        {/* This LocalHospitalIcon is taken from import above*/}
        <SidebarRow Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"/>
        {/* This EmojiFlagsIcon is taken from import above */}
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        {/* This PeopleIcon is taken from import above */}
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        {/* This ChatIcon is taken from import above */}
        <a class="Messenger"href="https://messenger-clone-652e1.web.app/" target="blank"><SidebarRow Icon={ChatIcon}  title="Messenger" /></a>
        {/* This StorefrontIcon is taken from import above */}
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        {/* This VideoLibraryIcon is taken from import above */}
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        {/* This ExpandMoreOutlined is taken from import above */}
        <SidebarRow Icon={ExpandMoreOutlined} title="View more"/>
    </div>
    );
}

export default Sidebar
