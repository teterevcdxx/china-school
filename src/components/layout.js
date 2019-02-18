import React from "react"
import style from "./all.module.css"

export default class Layout extends React.Component {
    constructor({ children }){
        super();
        this.children = children;
    }
    render(){
        return(
        <div className={style.page}>
            {this.children}
        </div>
        )
    }
}