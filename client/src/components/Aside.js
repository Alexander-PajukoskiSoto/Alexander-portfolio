import React from "react";
import AsideImage from '../images/cleanAside.svg'

export default function Aside(){
    return(
        <div>
            <img src={AsideImage} className="aside" alt="aside"/>
        </div>
    )
}