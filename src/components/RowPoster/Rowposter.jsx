import React from 'react'
import { useState,useEffect } from 'react'
import YouTube from 'react-youtube';
import './Rowposter.css'
import axios from "../../constants/axios";
import { Imgurl,API_KEY} from "../../constants/constants";
function Rowposter(props) {
  const[poster,setPoster]=useState([])  
  const[trailerid,setTrailerid]=useState([])
useEffect(()=>
{
    axios.get(props.url).then(res=>{
        setPoster(()=>res.data.results)
        
    }).catch(err=>
      {
        alert("Network error")
      }
    )
},[])
const showTrailer=(id)=>
{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
    console.log(res.data)
    if(res.data.results.length!==0)
      {
          setTrailerid(res.data.results[0])
      }
  })
}
//For Youtube 👇👇👇
const opts={
  height:'390',
  width:'100%',
  playerVars:{
    autoplay:1,
  },
};
//console.log(poster)
  return (
    <div className='row'>
      <h2 className='title'>{props.title}</h2>
      <div className='posters'>
      {poster.map((obj)=>
      { 
      return <img onClick={()=>showTrailer(obj.id)} className={props.isSmall?'smallposter':'poster'} alt='Rowposter' src={`${Imgurl+obj.backdrop_path}`}/>
      })}
      </div>
     { trailerid ? <YouTube videoId={trailerid.key} opts={opts}/>:null}
   </div>
  )
}
export default Rowposter
