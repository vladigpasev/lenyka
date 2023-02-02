import React from "react";
import "./footer.css";
import list from "./list.svg";
import delivery from "./delivery.svg";
import plus_sign from "./plus_sign.svg";
import wallet from "./wallet.svg";
import directoryka from "./directoryka.svg";

function Footer(){
   return (
   <div className="Footer">
     <nav>
       <img src={list} />
       <img src={delivery} />
       <img className="plus" src={plus_sign} />
       <img src={wallet} />
       <img src={directoryka} />
     </nav>
   </div>
 );
}

export default Footer;