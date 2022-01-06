import React from "react";
import { BsList } from "react-icons/bs";

export default function Header({ headerMenuShow, setHeaderMenuShow }) {
    
    const currentDate = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return (
        <header>
            <div>
                <h1>{weekday[currentDate.getDay()]}</h1>
                <h2>{currentDate.getDay()}. {month[currentDate.getMonth()]} {currentDate.getFullYear()}.</h2>
            </div>
            <div
                style={headerMenuShow ? {color: "#0080FF"} : {color: "white"}}
                className="headerIcon"
                onClick={() => setHeaderMenuShow(!headerMenuShow)}>
                    <BsList />
            </div>
        </header>
    )
}
