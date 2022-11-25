import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
// import Main from './components/Main';
import { useState, useEffect } from "react";
import React from "react";
 import "./App2.css";
import { client } from "./client";
import Posts from "./components/Posts";
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [jsonArticle,setJsonArticle]=useState([]);

  useEffect( () => {

    const fetchData = async () => {
      try {
        const {data}= await axios.get(
          "http://localhost:3030/receipes"
        );
        console.log("after axios");
        console.log (data);
        setArticles(data);
      } catch (err) {
      } 
    };
    fetchData();
    // client
    //   .getEntries()
    //   .then((response) => {
    //     console.log(response.items);
    //     setArticles(response.items);
    //   })
    //   .catch(console.error);
  }, [])

  return (

     <div className="App">
        <div className="container">
          <header>
            <div className="Header">
              <Header />
            </div>
          </header>
          <main>
            <div className="Navbar">
              <Navbar articles={articles} />
            </div>

            {/* <div className="wrapper">
            { articles?
                   <Main articles={articles} />
                :
                <h1>Loading...</h1>
                }
            </div> */}
{/*           
            <div className="wrapper">
            { articles ?
              <Posts posts={articles} />
              :
              <h1>Loading...</h1>
              }
            </div> */}
          </main>
          <footer>
            <div className='footer'>
              <Footer className="footer"/>
            </div>
          </footer>
        </div>
      </div>
  )
}

export default App;
