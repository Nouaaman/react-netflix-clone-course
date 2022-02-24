import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>Question? Call <a href="tel:+330800000000"> (+33) 0800-000-000 </a> </p>
                <ul className="links">
                        <ul><Link to='#'>FAQ</Link></ul>
                        <ul><Link to='#'>Help Center</Link></ul>
                        <ul><Link to='#'>Account</Link></ul>
                        <ul><Link to='#'>Media Center</Link></ul>
                        <ul><Link to='#'>Investor Relations</Link></ul>
                        <ul><Link to='#'>Redeem Gift Cards</Link></ul>
                        <ul><Link to='#'>Ways to Watch</Link></ul>
                        <ul><Link to='#'>Terms of Use</Link></ul>
                        <ul><Link to='#'>Privacy</Link></ul>
                        <ul><Link to='#'>Cookie Preferences</Link></ul>
                        <ul><Link to='#'>Contact Us</Link></ul>
                        <ul><Link to='#'>Only on Netflixs</Link></ul>
                        <ul><Link to='#'>Privacy</Link></ul>
                    </ul>
                    <p>Netflix</p>
            </div>
        </footer >
    )
}

export default Footer