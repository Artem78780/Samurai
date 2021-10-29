import React from "react";
import s from'./Profile.module.css';




const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Profile;