import React from "react"
import style from "./all.module.css"

export default ()=>(
    <div className={style.sidebarMedia}>
    <a href="#">
            <img src={require('../images/facebook-warm.png')}/>
    </a>    
    <a href="#">
            <img src={require('../images/twitter-warm.png')}/>
    </a>    
    </div>
)