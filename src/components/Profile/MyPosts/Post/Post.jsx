import React from "react";

import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg"></img>
      {props.message}
      <div>
        <span >Like</span>  {props.likes}
      </div>
    </div>
  );
};
export default Post;
