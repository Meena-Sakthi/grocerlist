import React from "react";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";
const [tours, setTours] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const fetchTours = () => {
  useEffect(() => {
    const tourData = async () => {
      fetch(url);
    const tour= await tourData.json();
    
    }
  });
  return <div></div>;
};

export default fetchTours;
