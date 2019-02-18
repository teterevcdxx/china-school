import React from "react"
import style from "./all.module.css"
import { Link } from "gatsby"

export default ({children }) => (
    <div className={style.header}>
        <div className={style.logobox}>
        <img src={require('../images/logo.png')}/>
        Chinese language school
        </div>
            <div className={style.topnav}>
                <Link to="/price/">Price</Link>
                <Link to="/location/">Location</Link>
                <Link to="/" style={{ color:'rgba(82%,31%,19%,1.00)' }}>在 加</Link>
            </div>
        <div className={style.sidebtn}>
            {children} 
        </div>
    </div>
)