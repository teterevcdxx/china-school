import React from "react"
import style from "./media.module.css"
export default () => (
    <div className={style.media}>
            <a href="#">
                <img src={require('../images/facebook-dark.png')}/>
            </a>    
            <a href="#">
                <img src={require('../images/twitter-dark.png')}/>
            </a>    
    </div>
)