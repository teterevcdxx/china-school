import React from "react"
import style from "./layout.module.css"

export default class Layout extends React.Component {
    constructor({ children }){
        super();
        this.children = children;
        this.state = { style: style.nonpage };
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({style: style.page});
          }, 10);
        
    }
    render(){
        return(
        <div className={this.state.style}>
            {this.children}
        </div>
        )
    }
}