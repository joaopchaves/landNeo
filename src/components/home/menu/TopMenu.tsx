import React from "react";
import '../../../App.css';
import '../../../content/css/main.css';
import '../../../content/css/vendor.css';
import '../../../content/css/base.css';


function TopMenu() {
    return (
        <header id="header" className="row">
            <div className="header-logo">
                <a href="index">neo. Coffee</a>
            </div>
            <nav id="header-nav-wrap">
                <ul className="header-main-nav">
                    <li className="current"><a className="smoothscroll" href="#home" >Bem Vindo</a></li>
                    <li><a className="smoothscroll" href="#about" title="Sobre" ></a>Neo</li>
                    <li><a className="smoothscroll" href="#yours" title="Seu Café"></a>Seu Café</li>
                    <li><a className="smoothscroll" href="#sigin" title="Cadastre"></a>Cadastre</li>
                </ul>

            </nav>

        </header>
         
    
);

}

export default TopMenu;
