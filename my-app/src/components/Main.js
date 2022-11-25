import React from 'react';
import Post from './Post';
import CookingBubble from './CookingBubble';
import JsonRecipe from './JsonRecipe';
import PostJson from './PostJson'

const Main = ({articles}) => {
  let topFive=[];
 
  // if(topFive.length === 0) topFive.push(articles[0]);
  for(let i=0;i<5;i++){
    topFive.push(articles[i]);
  }
 
  return (
    <>
    <CookingBubble />
      { articles ?
        <div className='mainSectionofMain'>
          <h2>Our Latest Recipes</h2>
          <div className='allPosts2'>
            {
              topFive.map((article, index) =>  
              <PostJson article={article} key={index} />
            // <Post article={article} key={index} />
              )}
          </div>
        </div>
        : <h2> "Loading... "</h2>
      }
    </>
  )
}

export default Main
