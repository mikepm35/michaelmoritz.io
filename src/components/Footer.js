import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="mailto:mike.p.moritz@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="https://github.com/mikepm35" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/mikepmoritz" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; 2019 Michael Moritz</li>
            </ul>
        </div>
    </footer>
)

export default Footer
