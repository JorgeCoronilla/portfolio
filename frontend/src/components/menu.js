import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

export const Menu = ({setDisplay}) => {

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const portfolio = () => {
        setDisplay('portfolio')
    }

    const story = () => {
        setDisplay('aboutMe')
    }

    const stackInfo = () => {
        setDisplay('stack')
    }

    return (
        <div className='menu'>
            <div className='menuDesktop'>
                <p onClick={portfolio}>My work</p>
                <p onClick={stackInfo}>Stack</p>
                <p onClick={story}>Story</p>
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
