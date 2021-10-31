import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myPost}>
     <h3>my post</h3> 
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={s.addPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Привіт! Як ти?" likes="15" />
        <Post message="Це мій перший пост =)" likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
