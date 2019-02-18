import React from "react"
import style from "./all.module.css"
import { Link } from "gatsby"
import container from "./container";
export default class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            style: style.newsbox,
            span: "加",
            content: " beer with vodka?",
            subcontent: "Sure about this",
            button: "Get it!",
            href: "#"
        };
    }
    won(){
        this.setState({
            style: style.won,
            content: " just won a "+"25%"+"discount",
            span: "You",
            subcontent: "Let's study with us",
            button: "Get it!",
            href: "/login/"
        })
    }
    render(){
        return(
        <div className={this.state.style}>
        <h1> <span>{this.state.span}</span>{this.state.content}</h1>
        <h3>{this.state.subcontent}</h3>
        <Link to={this.state.href} onClick={this.won.bind(this)}>{this.state.button}</Link>
        </div>
        )
    }
}