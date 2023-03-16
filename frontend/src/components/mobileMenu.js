import React from 'react'

export const MobileMenu = ({setDisplay }) => {
  return (
    <div>
    <div className='menuMobile'>
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
            <p>My work</p>
        </Link>
        <Link
            style={{ textDecoration: 'none', color: "white" }}
            to="/"
            onClick={() => {
                let stack = document.getElementById("contact");
                stack && stack.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
        >
            <p>Stack</p>
        </Link>
        <Link
            style={{ textDecoration: 'none', color: "white" }}
            to="/"
            onClick={() => {
                let story = document.getElementById("contact");
                story && story.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
        >
            <p>Story</p>
        </Link>
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
