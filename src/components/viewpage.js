import React from "react"
import style from "./all.module.css"

export default ({ children }) => (
    <div className={style.viewpage}>
        {children}
    </div>
)