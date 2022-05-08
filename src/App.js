import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Category from "./components/Category"

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
  const fetchData = async () => {
  const response = await axios.get("https://deliveroo-backend1982.herokuapp.com/");
    
    setData(response.data);
    setIsLoading(false);
  };

    fetchData();
  }, []);

  return isLoading ? (
    <p>chargement...</p>
  ):(
   <div className="App">
     <div>className="hero"</div>
     div
     <h1>{data.restaurant.name}</h1> 
     <p>{data.restaurant.description}</p>
     <img src={data.restaurant.picture} alt="Meal-hero" />
     {data.categories.map ((category, index)=> {
       return category.meals.length >0 && 
       <Category category={category} key={index}/> 
       
        })}; 
   </div>
  );
}

export default App;