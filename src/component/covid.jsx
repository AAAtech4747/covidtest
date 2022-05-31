import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () =>{

    const [data , setdata] = useState([])
   
   const getcoviddata = async() =>{
    try{
        const res = await fetch("https://data.covid19india.org/data.json")
        const Data = await res.json();
        console.log(Data.statewise[0])
        setdata(Data.statewise[0])
    } catch(err){
        console.log(err)
    }
    
    
   }
    useEffect (() => {
       getcoviddata();
    }
     );
    
     return(
        <>
        <section className="mainbody">
        <h1 > 🔴 Live  </h1>
        <h2>  Covid-19 Tracker </h2>
        <ul >
            <li style={{backgroundColor:"green"} } className="card">
                <div className="card__main">
                <div className="Card__inner">
                    <p className="card__name"><span> OUR</span> COUNTRY</p>
                    <p className="card__total card__small">INDIA</p>
                </div>
                </div>
            </li>

            <li style={{backgroundColor:"blue"} } className="card">
                <div className="card__main">
                <div className="Card__inner">
                    <p className="card__name"><span> TOTAL</span> RECOVERED</p>
                    <p className="card__total card__small">{data.recovered}</p>
                </div>
                </div>
            </li>


            <li style={{backgroundColor:"red"} }className="card">
                <div className="card__main">
                <div className="Card__inner">
                    <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
                    <p className="card__total card__small">{data.confirmed}</p>
                </div>
                </div>
            </li>


            <li style={{backgroundColor:"black"} }className="card">
                <div className="card__main ">
                <div className="Card__inner">
                    <p className="card__name"><span> TOTAL </span> DEATHS</p>
                    <p className="card__total card__small">{data.deaths}</p>
                </div>
                </div>
            </li>


            <li style={{backgroundColor:"orange"} }className="card">
                <div className="card__main">
                <div className="Card__inner">
                    <p className="card__name"><span> TOTAL </span> ACTIVE </p>
                    <p className="card__total card__small">{data.active}</p>
                </div>
                </div>
            </li>

            <li style={{backgroundColor:"darkviolet"} } className="card">
                <div className="card__main">
                <div className="Card__inner">
                    <p className="card__name"><span> LAST</span> UPDATED </p>
                    <p className="card__total card__small">{data.lastupdatedtime}</p>
                </div>
                </div>
            </li>


        </ul>
        </section>
        </>
    )
}

export default Covid;