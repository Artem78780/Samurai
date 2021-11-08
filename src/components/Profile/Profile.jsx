import React from "react";

import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";




const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData}
                newPostText={props.state.newPostText}
                addPost={ props.addPost } />
        </div>

    )
}
export default Profile; 