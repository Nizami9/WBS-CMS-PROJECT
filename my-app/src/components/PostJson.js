import React from "react";
import { marked } from "marked";

const PostJson = ({ article }) => {
  let postDescription;
  console.log(article);
  const { name, featuredImageURL, description } = article;
 if(article){
    postDescription = marked(description);
} 
return (
    <div className="post">
      <h2 className="title">{name}</h2>
      {featuredImageURL && (
        <img
          className="featuredImage"
          src={featuredImageURL}
          alt={name}
          title={name}
        />
      )}

      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};

export default PostJson;
