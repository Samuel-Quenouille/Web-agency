import React from 'react';
import {Link} from 'react-router-dom';
import { ThemeContext } from "../context/ThemeProvider"
import { useContext } from "react"

export default function Header() {

    const {toggleTheme, darkMode} = useContext(ThemeContext)

    return (
        <header>
            <div className="left">
                <div className="form-switch">
                    <input onChange={toggleTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>
            <div className="right">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">L'agence</Link>
                    <Link to="/works">Projets</Link>
                </div>
            </div>
        </header>
    )
}
