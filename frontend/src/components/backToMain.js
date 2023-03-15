import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export const BackToMain = () => {

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);


  return (
    <div>   <Link
    to="/"
    onClick={() => {
      let home = document.getElementById("cover");
      home && home.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
  >
    Back home
  </Link>
        
    </div>
  )
}
