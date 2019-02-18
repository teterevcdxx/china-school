import React from "react"
import menu from "../components/menu"
import style from "./all.module.css"
export default class Layout extends React.Component {
    render(){
        return(
        <a href="#" id="sideb">
        <img src={require('../images/burger.png')}/>
        </a>
        )
    }
}
