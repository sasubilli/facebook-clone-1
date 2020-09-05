import { Avatar } from "@material-ui/core";
import React from 'react'
import "./Story.css";
/* To set the story images */
function Story({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="Story">
        <Avatar className="Story_avatar" src={profileSrc} />
        <h4>{title}</h4>
        </div>
    );
}

export default Story;
