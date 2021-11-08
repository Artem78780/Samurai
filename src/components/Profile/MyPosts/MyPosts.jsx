import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements =props.postsData.map(
    post => <Post message={post.message} likes={post.likes}/>
  )
    
    let newPostElement = React.createRef();
    
    let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost (text);
      newPostElement.current.value = '';
    }
    let onPostChange = ()=>{
      let text = newPostElement.current.value
    }
  
  return ( 
    <div className={s.myPost}>
     <h3>my post</h3> 
      <div>
        <div>
          <textarea 
            onChange={onPostChange}
            ref={ newPostElement }
            value={props.newPostText}  
          /> 
        </div>   
        <div>
          <button onClick = { addPost } >Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
