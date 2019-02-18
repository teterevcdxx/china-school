import React from "react"
import style from "./all.module.css"
import { Link } from "gatsby"
// import Menubutton from "../components/menubutton";

export default class Menu extends React.Component {
        constructor(){
                super();
                this.state = {style: style.modalhide};
            }
            hide(){
                this.setState ({style: style.modalhide})
            }
            show(){
                this.setState ({style: style.modal});
            }
render(){
        return(
                <div className={style.sidebar}>
                <div className={this.state.style}>
                <div className={style.menu}>
                    <a href="#" className={style.menubutton} onClick={this.hide.bind (this)}>
                        <img src={require('../images/close.png')}/>
                </a>  
                    <div className ={style.menuitems}>
                    <Link to="/">Pricing</Link>
                <Link to="/location/">Location</Link>
                <Link to="/">Courses</Link>
                <Link to="/">Book-lesson</Link>
                <Link to="/" style={{ fontSize: '30px', color: 'rgba(82%,31%,19%,1.00)' }}>皮</Link>
                    </div>
                </div>           
                </div>      
                <div className={style.sideb}>
                <a href="#" id="sideb" onClick={this.show.bind (this)}>
                        <img src={require('../images/burger.png')}/>
                </a>
                </div>
                </div>
        )
}
}
