import React from "react";
import './App.css'
import NavBar from "./components/NavBar/navBar";
import Banner from "./components/Banner/Banner";
import Rowposter from "./components/RowPoster/Rowposter";
import {originals,action} from './urls'

export default function App()
{
  return(
    <div>
      <NavBar/>
      <Banner/>
      <Rowposter title='Netflix Originals' url={originals}/>
      <Rowposter title='Action' isSmall url={action}/>
    </div>
  )
}