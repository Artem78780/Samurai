import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Привіт! Як ти?', likes: 15},
    {id: 2, message: 'Це мій перший пост =)', likes: 27},
    {id: 3, message: 'Що робиш?', likes: 2000}
  ]
  let postsElements = postsData.map(
    post => <Post message={post.message} likes={post.likes}/>
  )
  
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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
