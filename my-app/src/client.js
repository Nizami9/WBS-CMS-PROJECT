import axios from 'axios';

export default function JsonData () {
const url='http://localhost:3030/';
const getRecipes=()=>{
    axios.get(`${url}receipes`)
}
} 



// contentful.createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN
 
// });
