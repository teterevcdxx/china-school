import React from "react"
import style from "./viewpage.module.css"

export default ({ children }) => (
    <div className={style.viewpage}>
        {children}
    </div>
)