import React from "react";
import "./style/Header.css"
import image from "../assets/images/1.jpg"
    const Header=()=>{
        return(
            <header>

<div class="container">
    <div className="logo">
        <img src={image} alt="logo"/>

    </div>
    
     <nav>
            <ul>
            <li><a href="/Bookslist">Books</a></li>

            </ul>
        
        </nav>
    
</div>       
    
</header>  

        )
        }


    
export default Header;

