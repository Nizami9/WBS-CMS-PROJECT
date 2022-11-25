import React from 'react';
import {useParams} from 'react-router-dom';
import { marked } from "marked";
import '../App2.css';

function JsonRecipe({articles}) {
    const {recipe} =useParams();
    console.log("article in json file",articles);
    
    const results =articles.filter(element => {
      return (element.name.includes(recipe)
      );
    });

    console.log("results " ,results)
    const result=results[0];
    const { name, featuredImageURL, description } = result;
    const postDescription = marked(description);

  return (
    <div>
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
    </div>
  )
}

export default JsonRecipe
