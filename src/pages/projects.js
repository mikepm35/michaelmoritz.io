import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerProjects from '../components/BannerProjects'

import liftsmart from '../assets/images/liftsmart.jpg'
import wibsie from '../assets/images/wibsie.jpg'
import healthweb from '../assets/images/healthweb.jpg'
import mysite from '../assets/images/mysite.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Moritz - Personal Projects</title>
            <meta name="description" content="Michael Moritz personal projects" />
        </Helmet>

        <BannerProjects />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Background</h2>
                    </header>
                    <p>As my career moved further into software development I wanted to find ways to learn new technologies, and explore ideas, which led me to building a few personal projects.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={wibsie} alt="" className="image"/>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Wibsie</h3>
                            </header>
                            <h4>An iOS app that uses machine learning to predict comfort levels based</h4>
                            <p>This application is built using Python and Node.js in AWS Lambda, AWS DynamoDB, and React Native.
                            Machine Learning models are built in TensorFlow, and adapt as a user labels results.</p>
                            <ul className="actions">
                                <li><Link to="https://itunes.apple.com/us/app/wibsie/id1432217892?ls=1&mt=8" className="button">App Store</Link></li>
                                <li><Link to="http://www.wibsie.com/" className="button">Website</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={liftsmart} alt="" className="image"/>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>LiftSmart</h3>
                            </header>
                            <h4>A web and iOS strength training app</h4>
                            <p>The app was written natively using Swift, and relies on a Python Flask and MySQL backend.
                            The app organizes exercises by body group, and inserts a popular YouTube video for instruction.</p>
                            <ul className="actions">
                            <ul className="actions">
                                <li><Link to="https://itunes.apple.com/us/app/liftsmart/id1173358571?ls=1&mt=8" className="button">App Store</Link></li>
                                <li><Link to="https://www.liftsmartapp.com/" className="button">Website</Link></li>
                            </ul>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={healthweb} alt="" className="image"/>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>HealthWeb</h3>
                            </header>
                            <h4>Prototype for simplifying patient communication</h4>
                            <p>When a medical emergency occurs it can be very challenging for a patient to record events and communicate with family.
                            The app lays out a concept for organizing information, and sharing with family and medical staff.
                            It also allows for storage of documents and images, plus has an integrated CT viewed.</p>
                            <ul className="actions">
                                <li><Link to="http://healthweb.mpmoritz.com/" className="button">View Demo</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={mysite} alt="" className="image"/>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Personal Site</h3>
                            </header>
                            <h4>This site!</h4>
                            <p>Created as a React static website using the Gatsby framework, and deployed to AWS S3.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
