import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categroies</h1>
                        <span>Categroies</span>
                        <span>Wome</span>
                        <span>Men</span>
                        <span>Shoes</span>
                        <span>Accesories</span>
                        <span>New Arrrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quos! Ipsam quisquam unde quam id asperiores! Assumenda magnam aut quia cumque ab quasi eaque harum odio, iste totam sit et!
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quos! Ipsam quisquam unde quam id asperiores! Assumenda magnam aut quia cumque ab quasi eaque harum odio, iste totam sit et!
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">My Store</span>
                    <span className="copyright">Copyright 2023. All Right Reserved</span>
                </div>
                <div className="right">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}


export default Footer