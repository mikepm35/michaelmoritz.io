import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/education">Education</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/experience">Professional Experience</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/certsandexams">Certifications and Exams</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/projects">Personal Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/interests">Interests</Link></li>
            </ul>
            <ul className="icons">
                <li><a href="mailto:mike.p.moritz@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="https://github.com/mikepm35" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/mikepmoritz" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
