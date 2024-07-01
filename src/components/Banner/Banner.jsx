import React from "react";
import './Banner.css'
import { API_KEY , Imgurl} from "../../constants/constants";
import axios from "../../constants/axios";
import { useEffect,useState } from "react";
export default function Banner()
{
    const[movie,setMovie]=useState([])
    useEffect(()=>
    {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>
        {
            try
            {
            const random=Math.floor(Math.random() * 20) + 1;
             setMovie(()=>res.data.results[random])
            console.log(res.data.results[random])
            }
            catch(err)
            {
                console.log("Failed to fetch movies",err)
            }
        })
    },[])
    return(
        <div style={{backgroundImage:`url(${movie? Imgurl+movie.backdrop_path:""})`}} className="banner">
            <div className="content">
            <h1 className="title">{movie.title}</h1>
            <div className="buttons">
            <button className="button">Play</button>
            <button className="button">Mylist</button>
            </div>
            <h1 className="description">{movie.overview}</h1>
            </div>
            <div className="fade"></div>
        
        </div>
    )
}