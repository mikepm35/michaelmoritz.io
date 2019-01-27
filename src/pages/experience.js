import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerExperience from '../components/BannerExperience'

import comcast from '../assets/images/comcast.jpg'
import dexis from '../assets/images/dexis.jpg'
import gore from '../assets/images/gore.jpg'
import elsicon from '../assets/images/elsicon.jpg'
import invensys from '../assets/images/invensys.jpg'
import ud from '../assets/images/ud.jpg'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Moritz - Experience</title>
            <meta name="description" content="Michael Moritz experience" />
        </Helmet>

        <BannerExperience />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Background</h2>
                    </header>
                    <p>My professional career started as an engineer developing products mostly leveraging materials science for the pharmaceutical industry.
                    In looking for more diverse opportunities, I entered the medical imaging field which renewed my interest in software development that started in college.
                    Further building on this, Comcast offered an opportunity to manage programs that are delivering cutting edge IP video technology at massive scale.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={comcast} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Comcast - IP Video</h3>
                            </header>
                            <h4>Senior Director - Program Delivery<br />
                            Mar 2016 - Present</h4>
                            <ul>
                              <li>Managing team of 15 in Denver and Philadelphia</li>
                              <li>Responsible for launching new IP Video products across multiple device platforms</li>
                              <li>Leading effort to replace legacy QAM infrastructure with full stack IP Video solution</li>
                              <li>Working experience with Python, SQL, Big Data pipelines, Cloud infrastructure</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={dexis} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Danaher - Medical Imaging</h3>
                            </header>
                            <h4>Senior Program Manager<br />
                            Jun 2014 - Mar 2016</h4>
                            <ul>
                              <li>Led effort to transition legacy desktop applications to a Web and Cloud portfolio, including shift to a SaaS model</li>
                              <li>Managed large software and electromechanical programs with development teams in the U.S. Finland, and India</li>
                              <li>Blended Agile methodologies with required medical device design controls throughout product lifecycle phases</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={gore} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>W.L. Gore - PharmBIO</h3>
                            </header>
                            <h4>Lead Engineering - New Product Development<br />
                            Jun 2007 - Jun 2014</h4>
                            <ul>
                              <li>Co-inventor of novel prefilled injector component to reduce aggregation of sensitive biologic drugs</li>
                              <li>Partnered with business development team to pitch potential partners on sponsoring trials</li>
                              <li>Hands-on experience with building prototype equipment, materials formulation, and advanced chemical analytical techniques</li>
                              <li>Presented at the 2013 Parenteral Drug Association Conference, and contributed data to the 4th Annual Prefilled Syrings Summit</li>
                              <li>Started as staff engineer in special projects team to aid internal teams with analytical problem solving</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={elsicon} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Elsicon - Optical Materials</h3>
                            </header>
                            <h4>Staff Engineer<br />
                            Dec 2007 - Dec 2008</h4>
                            <ul>
                              <li>Worked nights and weekends building and tuning specialized Pretilt Analysis Systems for the measurement of liquid crystal cells</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={invensys} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Invensys - Automation Software</h3>
                            </header>
                            <h4>Co-op Engineer<br />
                            Sep 2006 - Jun 2007</h4>
                            <ul>
                              <li>Developed scripts for converting competitor chemical process models to allow for easy customer transition</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={ud} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>University of Delaware</h3>
                            </header>
                            <h4>Supplemental Faculty - Chemical Engineering Dept.<br />
                            Jan 2012 - Jun 2014</h4>
                            <ul>
                              <li>Taught a segment of the Engineering Senior Design Classas a part-time faculty member</li>
                              <li>Developed curriculum, led bi-weekly reviews, graded students, and lectured on product development strategies</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
