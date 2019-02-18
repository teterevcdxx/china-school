import React from "react"
import style from "./all.module.css"
import select from "./login.module.css"

export default class Login extends React.Component {
    render(){
        return(
            <div className={style.loginModal}>
                <div className={style.loginForm}>
                    <form action="#">
                        <input type="text" name="name" placeholder="name*"/>
                        <input type="text" name="e-mail" placeholder="e-mail*"/>
                        <input type="text" name="phone" placeholder="phone*"/>
                        <div className={select.selectstyle}>
                            <select name="course" placeholder="course*">
                                <option value="intensive">intensive</option>
                                <option value="base">base</option>
                                <option value="intermediae">intermediate</option>
                                <option value="advanced">advanced</option>
                            </select>
                            </div>
                        <a href="/">Apply</a>
                    </form>
                </div>
            </div>
        )
    }
}