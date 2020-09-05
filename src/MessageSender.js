import React, { useState } from 'react'
import "./MessageSender.css";
/* This is imported from "@material-ui.com" */
import { Avatar } from '@material-ui/core';
/* This is imported from "@material-ui.com" */
import VideocamIcon from "@material-ui/icons/Videocam";
/* This is imported from "@material-ui.com" */
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
/* This is imported from "@material-ui.com" */
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
const [input, setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");

    const handleSubmit=(e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
    
        setInput("");
        setImageUrl("");
        };
    return ( 
        <div className="MessageSender">
        <div className="MessageSender_top">
        <Avatar header src={user.photoURL} />
        <form>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            className="MessageSender_input" placeholder={`What's on your mind, ${user.displayName}?`} />
            <input
            value={imageUrl}
            onChange= {e => setImageUrl(e.target.value)}
            placeholder="image URL {Optional}" />

            <button onClick={handleSubmit} type="Submit">
                Hidden Submit 
            </button>
        </form>
        </div>
        <div className="MessageSender_bottom">
        <div className="MessageSender_option">
            {/* This is taken from "@material-ui/icon/Videocam" */}
            <VideocamIcon style={{ color: "red"}} />
            <h3>Live Video</h3>
        </div>

        <div className="MessageSender_option">
             {/* This is taken from "@material-ui/icon/PhotoLibraryIcon" */}
            <PhotoLibraryIcon style={{ color: "green"}} />
            <h3>Photo/Video</h3>
        </div>

        <div className="MessageSender_option">
             {/* This is taken from "@material-ui/icon/InsertEmoticonIcon" */}
          <InsertEmoticonIcon style={{ color: "orange"}} />
          <h3>Feeling/Activity</h3>  
        </div>
        </div>
        </div>
    )
}

export default MessageSender
