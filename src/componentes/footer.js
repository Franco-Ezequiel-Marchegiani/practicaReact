import React from 'react';
import logo from '../assets/img/logo-DH.png'
function Footer(){
  return (
    <footer  class="pie">
    <nav id="logo">
        <a href="#"><img src={logo} alt="Logo Digital House"/></a>
    </nav>
    <nav id="opciones">
        <ul>
            <li><a href="#">facebook</a></li>
            <li><a href="https://www.linkedin.com/in/franco-e-marchegiani/">LinkedIn</a></li>
            <li><a href="https://github.com/Franco-Ezequiel-Marchegiani" target="blank">GitHub</a></li>
        </ul>
    </nav>
    </footer>
  )

}
export default Footer;