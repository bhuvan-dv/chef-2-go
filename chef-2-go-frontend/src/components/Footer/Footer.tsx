import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer-container px-20 pt-20 h-fullvh">
      <div className="footer-content-container"> 
        <nav className="left-footer-content-container">
            <ul className="left-content-ul">
                <li>
                    <a href="/">Mission</a>
                </li>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">Recipes</a>
                </li>
                <li>
                    <a href="/">Shop</a>
                </li>
            </ul>
        </nav>

        {/* Footer component  */}
        <nav className="right-footer-content-container">
            <ul className="right-footer-content-ul">
                <li>
                    <a className="footer-anchors" href="/">Contact</a>
                </li>
                <li>
                    <a className="footer-anchors" href="/">FAQs</a>
                </li>
                <li>
                    <a className="footer-anchors" href="/">Instagram</a>
                </li>
                <li>
                    <a className="footer-anchors" href="/">Terms</a>
                </li>
            </ul>
            <p></p>
        </nav>
      </div>
    </div>
  )
}

export default Footer
