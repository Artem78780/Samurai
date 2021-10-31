import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () =>{
    return(
        <div>
            <div className={s.banner}>
                <img src='https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg'></img>
            </div>
            <div className={s.ava}>
                ava + description
            </div>
        </div>   
    )
}
export default ProfileInfo;