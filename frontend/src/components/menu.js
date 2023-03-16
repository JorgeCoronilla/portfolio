import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export const Menu = ({setDisplay }) => {

    const normalColor = { color: "white" }
    const redColor = { color: "#fa7d7d" }
    
    const [textState1, setTextState1] = useState(normalColor);
    const [textState2, setTextState2] = useState(normalColor);
    const [textState3, setTextState3] = useState(normalColor);
    
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);


    const portfolio = () => {
        setDisplay('portfolio')
        setTextState1(redColor)
        setTextState2(normalColor)
        setTextState3(normalColor)
    }

    const stackInfo = () => {
        setDisplay('stack')
        setTextState1(normalColor)
        setTextState2(redColor)
        setTextState3(normalColor)   
    }

    const story = () => {
        setDisplay('aboutMe')
        setTextState1(normalColor)
        setTextState2(normalColor)
        setTextState3(redColor)
    }

    return (
        <div className='menu'>
            <div className='menuDesktop'>
                <p onClick={portfolio} style={textState1}>My work</p>
                <p onClick={stackInfo} style={textState2}>Stack</p>
                <p onClick={story} style={textState3}>Story</p>
                <Link
                    style={{ textDecoration: 'none', color: "white" }}
                    to="/"
                    onClick={() => {
                        let contact = document.getElementById("contact");
                        contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    <p>Contact</p>
                </Link>
            </div>
        </div>

    )
}
