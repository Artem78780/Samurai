import React from "react";

import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
        <div >
            <div>
                <img src='https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg'></img>
            </div>
            <div>
                ava + description
            </div>
           <MyPosts />
        </div>

    )
}
export default Profile;